import { useState } from "react";
import Container from "../../Components/Container/Container";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  
  console.log("Post ID:", id);

  const publicAxios = useAxios();
  const { data: post = [] } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await publicAxios.get(`/posts/${id}`);
      return res.data;
    }
  });

  console.log("Post data:", post);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const newCommentItem = {
        text: newComment,
        rating: rating,
      };
      setComments([...comments, newCommentItem]);
      setNewComment("");
      setRating(0);
    }
  };

  const stripHtmlTagsAndKeepStyle = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const children = div.childNodes;
    let result = '';
    for (let i = 0; i < children.length; i++) {
      result += children[i].outerHTML || children[i].nodeValue || '';
    }
    return result;
  }

  return (
    <div>
      <Container>
        <div className="mx-auto py-10">
          {/* Image Banner */}
          <img
            src={post?.image}
            alt="Banner"
            className="max-h-[500px] rounded-lg w-full"
          />

          {/* Blog Content */}
          <div className="mt-8">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold">
              {post?.post_title}
            </h1>

            {/* Blog Paragraph */}
            <p className="text-sm md:text-xl mt-4">
            <p dangerouslySetInnerHTML={{ __html: stripHtmlTagsAndKeepStyle(post?.post_content) }} ></p>
            </p>

            {/* Comments Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              {/* Render comments */}
              {comments.map((comment, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <p>{comment.text}</p>
                  <div className="flex items-center mt-2">
                    <span className="mr-2">Rating:</span>
                    {/* Render rating icons */}
                    {[...Array(comment.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mt-8">
              <label htmlFor="comment" className="block font-semibold">
                Your Comment:
              </label>
              <textarea
                id="comment"
                className="w-full h-24 border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring focus:ring-blue-400"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>

              <label htmlFor="rating" className="block font-semibold mt-4">
                Rating:
              </label>
              {/* Rating input */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`text-yellow-500 focus:outline-none ${
                      i + 1 <= rating ? "text-yellow-700" : ""
                    }`}
                    onClick={() => setRating(i + 1)}
                  >
                    ★
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailsPage;
