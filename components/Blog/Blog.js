import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BlogGrid from "./BlogGrid/BlogGrid";
const style = {
  wrapper: "",
};
const Blog = ({ blogData }) => {
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={() => {}} />
      <BlogGrid blogData={blogData} />
      <Footer onScroll={() => {}} />
    </div>
  );
};

export default Blog;
