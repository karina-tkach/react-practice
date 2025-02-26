import React from 'react';
import Button from "./Button"
import "../assets/css/BlogPost.css"

const BlogPost = ({ imgSrc, imgAlt, date, title, description, link }) => {
  return (
    <article className="blog-post">
      <img src={imgSrc} alt={imgAlt} />
      <p>{date}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button to={link} className="blog-post-link" content="Read More →"/>
    </article>
  );
};

export default BlogPost;
