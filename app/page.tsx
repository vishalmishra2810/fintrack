import Header from "@/src/common/header";
import Footer from "@/src/common/footer";
import HomePage from "@/src/common/homepage/homepage";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <main className="flex flex-col items-center justify-between">
        <Header />
      </main>
      <HomePage />
      <div>
        <Footer />
      </div>
    </div>
  );
}
