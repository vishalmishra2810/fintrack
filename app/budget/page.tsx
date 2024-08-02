import LeftSideBar from "@/src/common/left_sidebar";
import Budget from "@/src/components/budget/budget";

const BudgetPage = () => {
  return (
    <div>
        <main className="flex flex-col items-center justify-between">
        <LeftSideBar />
      </main>
        <Budget/>
    </div>
  );
};

export default BudgetPage;
