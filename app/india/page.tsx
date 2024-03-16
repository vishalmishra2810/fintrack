"use client";
import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import India from "@/src/components/India/india";

const IndiaPage = () => {
  return (
    <div>
      <Header />
      <India />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default IndiaPage;
