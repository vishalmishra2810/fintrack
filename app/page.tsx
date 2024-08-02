
import LeftSideBar from "@/src/common/left_sidebar";
import MainPage from "@/src/common/mainpage/mainpage";
import RightSidebar from "@/src/common/right_sidebar";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2] overflow-auto">
      <main className="flex flex-col items-center justify-between">
        <LeftSideBar />
      </main>
      <MainPage />
      <div>
        <RightSidebar />
      </div>
    </div>
  );
}
