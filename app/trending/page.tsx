import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import Pagination from "@/src/components/pagination/pagination";
import Trending from "@/src/components/trending/trending";

const TrendingPage = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default TrendingPage;
