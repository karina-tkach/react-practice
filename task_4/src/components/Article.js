import React from "react";

const Article = ({ post }) => {
    return (
        <div className="rounded-lg overflow-hidden shadow bg-white p-5">
            <img
                src={require(`../assets/img/${post.image}`)}
                alt={post.title}
                className="w-full max-h-[500px] md:h-full h-[240px] object-cover rounded-lg"
            />
            <div className="py-6">
                <p className="text-purple-600 font-medium">
                    <span className="">{post.author}</span> • {post.date}
                </p>

                <h2 className="md:text-4xl text-3xl font-bold mt-2 text-gray-900">{post.title}</h2>

                <p className="text-md text-gray-500 mt-2">{post.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span
                        className="px-3 py-1 text-sm font-medium text-white bg-purple-500 rounded-lg"
                    >
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="text-lg md:px-5 text-justify">{post.content}</div>
        </div>
    );
};

export default Article;
