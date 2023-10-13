import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import Pagination from "@/src/components/pagination/pagination";
import Sports from "@/src/components/sports/sports";

const SportsPage = () => {
  return (
    <div>
      <Header />
      <Sports />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default SportsPage;
