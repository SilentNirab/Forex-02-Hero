import { useState } from "react";
import Container from "../../Components/Container/Container";

const BlogDetailsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

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

  return (
    <div>
      <Container>
        <div className="mx-auto py-10">
          {/* Image Banner */}
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*zgBD_HvWK0j58Sqh99_yUA.jpeg"
            alt="Banner"
            className="max-h-[500px] rounded-lg w-full"
          />

          {/* Blog Content */}
          <div className="mt-8">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold">
              Title of the Blog Post
            </h1>

            {/* Blog Paragraph */}
            <p className="text-sm md:text-xl mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              ut esse nesciunt ab rerum, laboriosam eligendi, inventore quasi
              consequatur, adipisci provident aliquam debitis quia eveniet eos
              aliquid dolorum aspernatur? Quis non error omnis velit recusandae
              aliquam ad aperiam corporis deserunt incidunt necessitatibus
              consequatur porro, reprehenderit consectetur? Architecto,
              dignissimos nobis aspernatur quia fugiat esse laborum dolorem
              natus! Dignissimos esse non alias mollitia quam ipsum veritatis
              reprehenderit expedita voluptates? Incidunt quae vero
              reprehenderit saepe sapiente consectetur. Eos, nulla? Repellendus
              maiores dolore laborum? Dolorum assumenda eveniet atque esse
              dolore minus et recusandae voluptatem, placeat tenetur magni.
              Doloremque consequatur sapiente sed obcaecati voluptates autem?
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
