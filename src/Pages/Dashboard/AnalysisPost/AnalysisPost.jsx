import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import imageCompression from "browser-image-compression";

const AnalysisPost = () => {
  const publicAxios = useAxios();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // State to store compressed image
  const [title, setTitle] = useState(""); // State to store the title

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 0.100, // Maximum size of the compressed image in megabytes (200KB)
      maxWidthOrHeight: 1920, // Maximum width or height of the compressed image
      useWebWorker: true, // Enable Web Worker for faster compression (optional)
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
    const post_content = content;

    if (image) {
      const imageData = new FormData();
      imageData.append("image", image);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=ce2333bf62321691c88f982c14b6daba`,
          {
            method: "POST",
            body: imageData,
          }
        );
        const data = await response.json();
        const post = { image: data.data.url, post_title, post_content };

        // Send data to the server
        const res = await publicAxios.post("/analysis", post);
        if (res.data.insertedId) {
          // Clear form fields after successful submission
          setTitle("");
          setContent("");
          setImage(null);
          // Show success message
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
                <ReactQuill
                  theme="snow"
                  value={content}
                  name="content"
                  onChange={handleEditorChange}
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ size: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link"],
                      ["clean"],
                    ],
                  }}
                />
              </div>
              <button
                type="submit"
                className="p-3 bg-green-500 text-white hover:bg-green-600 rounded-md"
                required
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
