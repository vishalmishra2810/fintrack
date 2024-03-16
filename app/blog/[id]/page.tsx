"use client";

import BlogSection from "@/src/common/blog/blog-section/blog-section";
import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";

const BlogInformation = () => {
  return (
    <div>
      <Header />
      <BlogSection />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default BlogInformation;
