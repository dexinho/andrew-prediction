import { getTransactions } from "@/utility/getTransactions";
import { Transaction } from "../../../types/types";
import createTableRows from "@/utility/createTableRows";
import Table from "@/components/Table";
import NewTransaction from "@/components/NewTransaction";
import { makeDateEuropean } from "@/utility/makeDateEuropean";

const headers = ["id", "order id", "date", "from state", "to state"];

const TransactionsPage = async () => {
  const transactions = await getTransactions();
  const europeanTransactionsDates = makeDateEuropean<Transaction>(transactions);
  const rows = createTableRows<Transaction>(europeanTransactionsDates);

  return (
    <div className="flex flex-col gap-4">
      <Table title={"Transactions"} headers={headers} rows={rows} />
      <NewTransaction />
    </div>
  );
};

export default TransactionsPage;
