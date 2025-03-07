import React from "react";

const CategoriesSidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      {/* Mobile Dropdown */}
      <div className="block md:hidden mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg bg-white shadow-sm"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden md:block">
        <h2 className="text-lg font-semibold my-4">Blog Categories</h2>
        <ul className="space-y-3 ml-3">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`w-full text-left p-2 rounded-md transition ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSidebar;
