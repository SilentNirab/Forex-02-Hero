import { useState } from "react";

const BlogDetails = () => {
  const [comments, setComments] = useState({});

  const articles = [
    {
      id: 1,
      title: "Introduction to Forex Trading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet auctor orci, vitae consequat mauris hendrerit ac. Integer consequat faucibus elit, ac tristique nulla aliquet vel. Ut malesuada, metus in lacinia condimentum, ante felis gravida arcu, id tristique eros sapien ut felis.",
      author: "John Doe",
      date: "March 25, 2024",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Tips for Successful Day Trading",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet auctor orci, vitae consequat mauris hendrerit ac. Integer consequat faucibus elit, ac tristique nulla aliquet vel. Ut malesuada, metus in lacinia condimentum, ante felis gravida arcu, id tristique eros sapien ut felis.",
      author: "Jane Smith",
      date: "March 26, 2024",
      image: "https://via.placeholder.com/300",
    },
    // Add more articles as needed
  ];

  const handleCommentSubmit = (articleId, name, comment) => {
    const newComment = { name, comment };
    setComments((prevComments) => ({
      ...prevComments,
      [articleId]: [...(prevComments[articleId] || []), newComment],
    }));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trading Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.content}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {comments[article.id] &&
                  comments[article.id].map((comment, index) => (
                    <div key={index} className="mb-2">
                      <span className="font-semibold">{comment.name}:</span>{" "}
                      {comment.comment}
                    </div>
                  ))}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const name = e.target.elements.name.value;
                    const comment = e.target.elements.comment.value;
                    handleCommentSubmit(article.id, name, comment);
                    e.target.reset();
                  }}
                >
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="border-gray-300 border rounded-md px-4 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <textarea
                      name="comment"
                      placeholder="Your Comment"
                      className="border-gray-300 border rounded-md px-4 py-2 w-full"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  By {article.author} on {article.date}
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
