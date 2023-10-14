import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import Pagination from "@/src/components/pagination/pagination";
import Review from "@/src/components/review/review";

const ReviewPage = () => {
  return (
    <div>
      <Header />
      <Review />
      <Pagination />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default ReviewPage;
