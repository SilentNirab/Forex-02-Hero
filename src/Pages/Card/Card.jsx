/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { title, image, paragraph } = card || {};
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:cursor-pointer">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
