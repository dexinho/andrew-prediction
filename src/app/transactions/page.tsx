import { getTransactions } from "@/utility/getTransactions";
import { Transaction } from "../../../types/types";
import createTableRows from "@/utility/createTableRows";
import Table from "@/components/Table";
import NewTransaction from "@/components/NewTransaction";

const headers = ["id", "order_id", "date", "from_state", "to_state"];

const TransactionsPage = async () => {
  const transactions = await getTransactions();
  const rows = createTableRows<Transaction>(transactions);

  return (
    <div className="flex flex-col gap-4">
      <Table title={"Transactions"} headers={headers} rows={rows} />
      <NewTransaction />
    </div>
  );
};

export default TransactionsPage;
