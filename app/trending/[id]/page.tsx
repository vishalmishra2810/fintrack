"use client";

import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import TrendingSection from "@/src/components/trending/trending-section/trending-blog";

const SportsInformation = () => {
  return (
    <div>
      <Header />
      <TrendingSection />
      <SpeedDial />
      <Footer />
    </div>
  );
};

export default SportsInformation;
