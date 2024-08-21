import LeftSideBar from "@/src/common/left_sidebar";
import Transactions from "@/src/components/transactions/transaction";


const TransactionPage = () => {

  return (
    <div>
      <main className="flex flex-col items-center justify-between">
        <LeftSideBar />
      </main>
     <Transactions/>
    </div>
  );
};

export default TransactionPage;
