import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ categorys }) => {
  // eslint-disable-next-line react/prop-types
  const { category } = categorys;

  // Define an array of Tailwind CSS colors
  const backgroundColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-teal-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-gray-500",
  ];

  // Generate a random index to select a background color
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  const backgroundColor = backgroundColors[randomIndex];

  return (
    <div className="mx-auto">
      <Link to={`/analysis/${category}`}>
        <div
          className={`shadow-md rounded-md p-4 w-48 md:w-80 ${backgroundColor}`}
        >
          <p className="text-xl font-bold text-center text-white">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ButtonComponent;
