import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import LifeStyle from "@/src/components/lifestyle/lifestyle";
import Pagination from "@/src/components/pagination/pagination";

const LifeStylePage = () => {
  return (
    <div>
      <Header />
      <LifeStyle />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default LifeStylePage;
