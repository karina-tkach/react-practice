import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleFaqClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const element = document.getElementById("faq");
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 55, 
          behavior: "smooth",
        });
      }
    } else {
      navigate("/#faq");
      setTimeout(() => {
        const element = document.getElementById("faq");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 55, 
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <ul className={className}>
      <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
      <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About us</Link></li>
      <li><Link to="/features" className={location.pathname === "/features" ? "active" : ""}>Features</Link></li>
      <li><Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>Pricing</Link></li>
      <li><a href="/#faq" onClick={handleFaqClick}>FAQ</a></li>
      <li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
    </ul>
  );
};

export default Nav;
