import React, { useState } from "react";
import blogData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";
import NewsletterCard from "../components/NewsletterCard";
import Pagination from "../components/Pagination";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("most-recent");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const filteredPosts = blogData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === "most-recent") return new Date(b.date) - new Date(a.date);
    if (sortOrder === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortOrder === "alphabetical") return a.title.localeCompare(b.title);
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">The latest writings from our team</h1>
      <p className="text-center text-gray-600">
        The latest industry news, interviews, and resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {currentPosts.map((post, index) => (
          <>
            <BlogCard key={post.id} post={post} />
            {currentPosts.length > 3 && index === 2 && <NewsletterCard key="newsletter" />}
          </>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default BlogsPage;
