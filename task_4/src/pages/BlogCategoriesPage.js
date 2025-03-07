import React, { useState, useEffect } from "react";
import blogData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import CategoriesSidebar from "../components/CategoriesSidebar";
import Pagination from "../components/Pagination";
import { filterPosts, paginatePosts } from "../utils/utils";

const BlogCategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const categories = ["All", ...new Set(blogData.map((post) => post.category))];

  let filteredPosts = filterPosts(blogData, searchQuery);
  if (selectedCategory !== "All") {
    filteredPosts = filteredPosts.filter((post) => post.category === selectedCategory);
  }

  const { currentPosts, totalPages } = paginatePosts(filteredPosts, currentPage, postsPerPage);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="min-h-[200px] py-9 md:my-10 flex flex-col text-left justify-between">
        <p className="text-purple-600 font-bold mb-2">Our Blog</p>
        <h1 className="text-4xl font-bold">Resources and Insights</h1>
        <p className="text-gray-600 text-lg mt-3">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 scroll-target">
        <div className="w-full md:w-1/4 md:border-r md:border-gray-200 md:pr-10 md:-mt-5">
          <div className="hidden md:block">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <CategoriesSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentPosts.length > 0 && (
              <>
                <div className="hidden md:block md:col-span-2">
                  <BlogCard post={currentPosts[0]} large />
                </div>

                <div className="block md:hidden">
                  <BlogCard post={currentPosts[0]} />
                </div>
              </>
            )}
            {currentPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default BlogCategoriesPage;
