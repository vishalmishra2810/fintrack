import Header from "@/src/components/common/header";
import LatestArticles from "@/src/components/latestArticles/latestArticles";
import Footer from "@/src/components/common/footer";
import Articles from "@/src/components/articles/articles";
import TopStories from "@/src/components/top-stories/topStores";
import RelatedArticles from "@/src/components/related-articles/relatedArticles";
import Slide from "@/src/components/slide/slide";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <main className="bg-[#e44d3b] flex flex-col items-center justify-between">
        <Header />
      </main>
      <Slide />
      <LatestArticles />
      <Articles />
      <TopStories />
      <RelatedArticles />
      <div className="bg-[#e44d3b] ">
        <Footer />
      </div>
    </div>
  );
}
