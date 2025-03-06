import React, { useState } from "react";
import Icon from "../assets/img/icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-40 w-full flex justify-between items-center">
      <div className="w-1/2 md:w-1/3 flex items-center">
        <div className="flex items-center">
          <img src={Icon} alt="Logo" className="w-[30px] h-[30px]" />
          <h1 className="ml-5 text-lg font-semibold">Untitled UI</h1>
        </div>

        <nav className="hidden md:flex space-x-4 ml-8">
          <HeaderLink href="/" content="Blogs" />
          <HeaderLink href="/categories" content="Categories" />
        </nav>
      </div>

      <div className="hidden md:flex space-x-4">
        <HeaderButton content="Log in" variant="outline" />
        <HeaderButton content="Sign up" variant="solid" />
      </div>

      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-600"></span>
      </button>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full flex flex-col items-center space-y-4">
          <HeaderLink href="/" content="Blogs" />
          <HeaderLink href="/categories" content="Categories" />
          <HeaderButton content="Log in" variant="outline" />
          <HeaderButton content="Sign up" variant="solid" />
        </nav>
      )}
    </header>
  );
};

const HeaderLink = ({ href, content }) => {
  return (
    <a href={href} className="text-gray-800 hover:text-black hover:font-medium">
      {content}
    </a>
  );
};

const HeaderButton = ({ content, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md text-sm font-medium";
  const variantClasses =
    variant === "solid"
      ? "bg-purple-600 text-white hover:bg-purple-500"
      : "text-gray-800 border border-gray-300 hover:bg-gray-100";

  return <button className={`${baseClasses} ${variantClasses}`}>{content}</button>;
};

export default Header;
