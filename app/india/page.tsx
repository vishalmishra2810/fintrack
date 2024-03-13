"use client";
import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import SpeedDial from "@/src/common/speed-dial/speed-dial";
import India from "@/src/components/India/india";
import { usePathname, useRouter } from "next/navigation";

const IndiaPage = () => {
  const router = useRouter();

  console.log('here is ss', router)
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
