import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const renderPageNumbers = () => {
    let pages = [];
    if (totalPages <= 6) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages = [1, 2, 3, "...", totalPages-2, totalPages - 1, totalPages];
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => page !== "..." && setCurrentPage(page)}
        className={`px-3 py-1 rounded-lg disabled:opacity-50 ${
          currentPage === page ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
        }`}
        disabled={page === "..."}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="mt-8">
      <div className="hidden md:flex justify-center items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-black-200 hover:bg-gray-100 rounded-lg flex items-center disabled:opacity-50"
        >
          ← Previous
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-black-200 hover:bg-gray-100 rounded-lg flex items-center disabled:opacity-50"
        >
          Next →
        </button>
      </div>

      <div className="flex md:hidden justify-between items-center px-4 py-2 w-full">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="py-2 px-3 text-black-200 hover:bg-gray-100 border rounded-lg border-gray-300 flex items-center disabled:opacity-50"
        >
          ←
        </button>
        <span className="text-sm text-gray-700">
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="py-2 px-3 text-black-200 hover:bg-gray-100 border rounded-lg border-gray-300 flex items-center disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Pagination;
