import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import imageCompression from "browser-image-compression";

const AnalysisPost = () => {
  const publicAxios = useAxios();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Added state for content
  const [category, setCategory] = useState(""); // Added state for category

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 0.100,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressedImage = await imageCompression(file, options);
      setImage(compressedImage);
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };

  const handelAddPost = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const post_title = form.get("title");
    // Fixed issue: Get content from the "content" input
    const post_content = content; 
    // Added: Get category from the "category" select field
    const post_category = category;

    if (image) {
      const imageData = new FormData();
      imageData.append("image", image);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=8b94d859e5ec8d59fb1205fb9b17715f`,
          {
            method: "POST",
            body: imageData,
          }
        );
        const data = await response.json();
        const post = { image: data.data.url, post_title, post_content, post_category };

        const res = await publicAxios.post("/analysis", post);
        if (res.data.insertedId) {
          setTitle("");
          setImage(null);
          setContent(""); // Clear content field after successful submission
          setCategory(""); // Clear category field after successful submission
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Post added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error adding post:", error);
      }
    } else {
      console.error("Please select an image.");
    }
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl text-center font-bold">Post New Analysis</h2>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handelAddPost}>
              <div className="mb-4">
                <label className="text-xl text-gray-600">Title</label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                  id="title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">Category</label>
                <br />
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  required
                >
                  <option disabled value="">Select One</option>
                  <option value="AUDUSD">AUDUSD</option>
                  <option value="EURUSD">EURUSD</option>
                  <option value="USDCHF">USDCHF</option>
                  <option value="USDCAD">USDCAD</option>
                  <option value="USDJYP">USDJYP</option>
                  <option value="XAUUSD">XAUUSD</option>
                  <option value="EURJYP">EURJYP</option>
                  <option value="GBPJYP">GBPJYP</option>
                  <option value="GBPAUD">GBPAUD</option>
                  <option value="GBPUSD">GBPUSD</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-xl text-gray-600">Image</label>
                <br />
                <input
                  type="file"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  required
                />
              </div>

              <div className="mb-8">
                <label className="text-xl text-gray-600">Content</label>
                <br />
                <textarea
                  className="border-2 border-gray-300 p-2 w-full"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="p-3 bg-green-500 text-white hover:bg-green-600 rounded-md"
              >
                Submit Analysis
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPost;
