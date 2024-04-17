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
  "Date",
];

const StatesPage = async () => {
  const transactions = await getTransactions();
  const states = createStatesFromTransactions(transactions);
  const rows = createTableRows<State>(states);

  return (
    <>
      <Table title={"States"} headers={tableHeaders} rows={rows} />
    </>
  );
};

export default StatesPage;
