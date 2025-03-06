import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ post }) => {
    const imagePath = require(`../assets/img/${post.image}`);

    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white flex flex-col h-full">
            <img src={imagePath} alt={post.title} className="w-[384px] h-[240px] object-cover rounded-lg" />
            
            <p className="text-purple-600 text-sm font-medium mt-3">{post.category}</p>
            
            <Link to={`/blog/${post.id}`} className="flex items-center justify-between text-2xl font-semibold mt-2">
                {post.title}
                <ArrowUpRight className="w-5 h-5" />
            </Link>
            
            <p className="text-gray-600 text-sm mt-1 flex-grow">{post.description}</p>
            
            <div className="flex flex-col mt-4">
                <p className="text-sm text-gray-800 font-medium">{post.author}</p>
                <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
        </div>
    );
};

export default BlogCard;
