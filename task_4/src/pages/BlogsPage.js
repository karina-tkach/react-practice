import React, { useState, useEffect } from "react";
import blogData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";
import NewsletterCard from "../components/NewsletterCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import CategoriesButton from "../components/CategoriesButton";
import { filterPosts, sortPosts, paginatePosts } from "../utils/utils";

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("most-recent");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortOrder]);

  const filteredPosts = filterPosts(blogData, searchQuery);
  const sortedPosts = sortPosts(filteredPosts, sortOrder);
  const { currentPosts, totalPages } = paginatePosts(sortedPosts, currentPage, postsPerPage);


  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="min-h-[280px] md:p-9 py-9 md:my-10 flex flex-col items-center text-center justify-between">
        <p className="text-purple-600 font-bold">Our blog</p>
        <h1 className="text-4xl font-bold">The latest writings from our team</h1>
        <p className="text-gray-600 text-lg mt-3">
          The latest industry news, interviews, technologies, and resources.
        </p>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="flex items-center justify-between my-10 md:flex-row flex-col space-y-7 md:space-y-0 scroll-target">
        <CategoriesButton />
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

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
