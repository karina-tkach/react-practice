import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogsPage from "./pages/BlogsPage";
import BlogCategoriesPage from "./pages/BlogCategoriesPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BlogsPage />} />
          <Route path="/categories" element={<BlogCategoriesPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
