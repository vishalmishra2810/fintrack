import Tags from "@/src/components/tags/tags";
import NewsLetter from "../news-letter/newsLetter";
import Comment from "@/src/components/comment/comment";
import BlogSidebar from "../news-sidebar/news-sidebar";
import BlogSection from "./blog-section/blog-section";

const Blog = () => {
  return (
    <div>
      <div className="flex flex-1">
        <p className="pl-6 pr-6 mt-6">
          {[...Array(3)].map((_, index) => (
            <>
              <BlogSidebar />
            </>
          ))}
          <div className="pt-6">
            <Tags />
          </div>
        </p>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <p className="pl-6">
          <BlogSection />
          <Comment />
          <NewsLetter />
        </p>
      </div>
    </div>
  );
};

export default Blog;
