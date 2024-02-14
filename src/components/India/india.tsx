import NewsLetter from "@/src/common/news-letter/newsLetter";
import Tags from "../tags/tags";
import NewsSidebar from "@/src/common/news-sidebar/news-sidebar";
import IndiaStories from "./india-section/india-stories";
import Pagination from "../pagination/pagination";

const India = () => {
  return (
    <div>
      <div className="flex flex-1">
        <p className="pl-6 pr-6 mt-6">
          <div>
            <NewsSidebar />
          </div>
          <div className="pt-6">
            <Tags />
          </div>
        </p>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <p className="pl-6">
          <IndiaStories />
          <NewsLetter />
          <Pagination />
        </p>
      </div>
    </div>
  );
};

export default India;
