import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonComponent = ({ categorys }) => {
  // eslint-disable-next-line react/prop-types
  const { category } = categorys;


  return (
    <div className="">
      <Link to={`/analysis/${category}`}>
        <div className={` shadow-md p-4`}>
          <p className="text-xl font-bold text-left text-black">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default ButtonComponent;
