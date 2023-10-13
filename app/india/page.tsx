import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import India from "@/src/components/India/india";
import Pagination from "@/src/components/pagination/pagination";

const IndiaPage = () => {
  return (
    <div>
      <Header />
      <India />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default IndiaPage;
