"use client";

import LatestArticles from "@/src/components/latestArticles/latestArticles";
import RelatedArticles from "@/src/components/related-articles/relatedArticles";
import ShortTrending from "@/src/components/short-trending/shortTrending";
import Slide from "@/src/components/slide/slide";
import Timeline from "@/src/components/timeline/timeline";
import TopStories from "@/src/components/top-stories/topStories";
import SpeedDial from "../speed-dial/speed-dial";
import { TwitterTweetEmbed } from "react-twitter-embed";

const HomePage = () => {
  return (
    <>
      <Slide />
      <LatestArticles />
      <ShortTrending />
      {/* <div className="mx-[40px]">
        <TwitterTweetEmbed
          tweetId={"1713207336813121836"}
          options={{
            align: "left",
          }}
        />
        <TwitterTweetEmbed
          tweetId={"1713026071929696757"}
          options={{
            align: "right",
          }}
        />
      </div> */}
      <TopStories />
      <Timeline />
      <RelatedArticles />
      <SpeedDial />
    </>
  );
};

export default HomePage;
