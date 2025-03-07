import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ post, large }) => {
    const imagePath = require(`../assets/img/${post.image}`);

    return (
        <div className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white flex flex-col ${large ? "md:flex-row  md:justify-center md:min-h-[320px]" : "h-full"
            }`}>
            <img src={imagePath} alt={post.title} className={`object-cover rounded-lg ${large ? "md:w-3/5 md:h-full md:max-h-[350px]" : "w-full h-[240px]"
                }`} />
            <div className={`flex flex-col flex-grow ${large ? "md:ml-6 md:w-2/5 md:justify-between" : ""}`}>
                <p className="text-purple-600 text-sm font-medium mt-3">{post.category}</p>

                <Link to={`/blog/${post.id}`} className={`flex items-center justify-between ${large ? "md:text-4xl" : "text-2xl"} font-semibold mt-2`}>
                    {post.title}
                    <ArrowUpRight className={`${large ? "md:w-8 md:h-8" : "w-5 h-5"}`} />
                </Link>

                <p className={`text-gray-600 ${large ? "md:text-md md:mt-5" : "text-2sm"} mt-1 flex-grow`}>{post.description}</p>

                <div className="flex flex-col mt-4">
                    <p className="text-sm text-gray-800 font-medium">{post.author}</p>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
