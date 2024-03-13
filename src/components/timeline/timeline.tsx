import { TimelineBlogData } from "@/src/response/timeline-blog.response";
import TimelineNews from "./timelineJson/timeline-news.json";

const Timeline = () => {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500 mx-20 xs:mx-5">
      {TimelineNews.TimelineNews.map(
        (data: TimelineBlogData, index: number) => {
          return (
            <li key={index}>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  {data.date}
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">{data.title}</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  {data.content}
                </p>
              </div>
            </li>
          );
        }
      )}
    </ol>
  );
};

export default Timeline;
