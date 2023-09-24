import Header from "@/src/components/common/header";
import Profile from "@/src/components/home/profile";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <main className="bg-[#e44d3b] flex flex-col items-center justify-between">
        <Header />
      </main>
      <Profile />
    </div>
  );
}
