import NewsSidebar from "@/src/common/news-sidebar/news-sidebar";
import Tags from "../tags/tags";
import TopStories from "../top-stories/topStories";
import NewsLetter from "@/src/common/news-letter/newsLetter";

const Review = () => {
  console.log('sss')
  return (
    <div>
      <div className="flex flex-1">
        <p className="pl-6 pr-6 mt-6">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <NewsSidebar />
            </div>
          ))}
          <div className="pt-6">
            <Tags />
          </div>
        </p>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <p className="pl-6">
          <TopStories />
        </p>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Review;
