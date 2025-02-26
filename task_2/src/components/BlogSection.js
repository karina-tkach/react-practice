import React from 'react';
import BlogPost from './BlogPost';
import blog1Image from "../assets/img/blog1.jpg"
import blog2Image from "../assets/img/blog2.jpg"
import blog3Image from "../assets/img/blog3.jpg"
import blog4Image from "../assets/img/blog4.jpg"
import blog5Image from "../assets/img/blog5.png"
import blog6Image from "../assets/img/blog6.jpg"
import "../assets/css/BlogSection.css"

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: blog1Image,
      imgAlt: "A successful Webflow user with their computer and business tools",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
    {
      imgSrc: blog2Image,
      imgAlt: "A person working on their Webflow consultancy business",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
    {
      imgSrc: blog3Image,
      imgAlt: "A detailed analysis of Webflow and user growth",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
    {
      imgSrc: blog4Image,
      imgAlt: "A user taking notes while using Webflow for business growth",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
    {
      imgSrc: blog5Image,
      imgAlt: "An entrepreneur celebrating business success with Webflow",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
    {
      imgSrc: blog6Image,
      imgAlt: "A Webflow user discussing business growth strategies",
      date: "27 Jan 2025",
      title: "How one Webflow user grew his single person consultancy from $0-100k in 14 months",
      description: "See how pivoting to Webflow changed one person's sales strategy and allowed him to attract",
      link: "#",
    },
  ];

  return (
    <section className="posts">
      <h2>Our Blog</h2>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            imgSrc={post.imgSrc}
            imgAlt={post.imgAlt}
            date={post.date}
            title={post.title}
            description={post.description}
            link={post.link}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
