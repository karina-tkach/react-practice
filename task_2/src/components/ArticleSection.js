import React from 'react';
import Button from './Button';
import peopleImage from "../assets/img/people-working.png"

const ArticleSection = () => {
  return (
    <section className="article">
      <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
      <p>Andrew Jonson &bull; Posted on 27th January 2025</p>
      <img src={peopleImage} alt="People working on a project in a collaborative environment" />
      <p>
        Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
        and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea
        to the level of the spectator on a hillside.
      </p>
      <Button to="#" className="article-link" content="Read more" />
    </section>
  );
};

export default ArticleSection;
