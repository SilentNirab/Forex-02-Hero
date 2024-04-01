import { Link } from "react-router-dom";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Card = ({ card }) => {

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
  const {_id, post_title, image, post_content } = card || {};
  const getFirst20Words = (content) => {
    return content.split(' ').slice(0, 20).join(' ') + '...';
  }

  const shortenedContent = getFirst20Words(post_content);
  return (
    <Link to={`/blogs/:${_id}`}>

      <div className="card card-compact bg-base-100 shadow-xl hover:cursor-pointer">
        <figure>
          <img className="h-[210px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post_title}</h2>
          {/* Sanitize HTML content before rendering */}
          <p dangerouslySetInnerHTML={{ __html: stripHtmlTagsAndKeepStyle(shortenedContent) }} ></p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
