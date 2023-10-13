import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import Pagination from "@/src/components/pagination/pagination";
import Politics from "@/src/components/politics/politics";

const PoliticsPage = () => {
  return (
    <div>
      <Header />
      <Politics />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default PoliticsPage;
