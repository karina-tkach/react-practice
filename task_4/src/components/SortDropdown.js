import React from "react";
import { ChevronDown } from "lucide-react";

const SortDropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="relative md:w-[280px] w-full">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="appearance-none w-full p-2 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 font-medium pr-8"
      >
        <option value="most-recent">Most recent</option>
        <option value="oldest">Oldest</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default SortDropdown;
