import Header from "@/src/common/header";
import LatestArticles from "@/src/components/latestArticles/latestArticles";
import Footer from "@/src/common/footer";
import Articles from "@/src/components/articles/articles";
import TopStories from "@/src/components/top-stories/topStories";
import RelatedArticles from "@/src/components/related-articles/relatedArticles";
import Slide from "@/src/components/slide/slide";
import ShortTrending from "@/src/components/short-trending/shortTrending";
import Timeline from "@/src/components/timeline/timeline";
import SpeedDial from "@/src/common/speed-dial/speed-dial";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <main className="flex flex-col items-center justify-between">
        <Header />
      </main>
      <Slide />
      <LatestArticles />
      <ShortTrending />
      <Articles />
      <TopStories />
      <Timeline />
      <RelatedArticles />
      <SpeedDial />
      <div >
        <Footer />
      </div>
    </div>
  );
}
