import Table from "@/components/Table";
import createTableRows from "@/utility/createTableRows";
import { getTransactions } from "@/utility/getTransactions";
import { State } from "../../../types/types";
import { createStatesFromTransactions } from "@/utility/createStatesFromTransactions";

const tableHeaders = [
  "Transaction_id",
  "Factory",
  "Ocean",
  "Inventory",
  "Customer",
  "Timestamp",
];

const StatesPage = async () => {
  const transactions = await getTransactions();
  const states = createStatesFromTransactions(transactions);
  const rows = createTableRows<State>(states);

  // console.log(transactions?.length)

  return (
    <>
      <h1 className="text-center my-4 text-3xl font-bold">STATES</h1>
      <Table headers={tableHeaders} rows={rows} />
    </>
  );
};

export default StatesPage;
