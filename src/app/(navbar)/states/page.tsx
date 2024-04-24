import Table from "@/components/Table";
import createTableRows from "@/utility/createTableRows";
import { getTransactions } from "@/utility/getTransactions";
import { State, Transaction } from "../../../../types/types";
import { createStatesFromTransactions } from "@/utility/createStatesFromTransactions";
import { makeDateEuropean } from "@/utility/makeDateEuropean";

const tableHeaders = [
  "Transaction id",
  "Factory",
  "Ocean",
  "Inventory",
  "Customer",
  "Date",
];

const StatesPage = async () => {
  const transactions = await getTransactions();
  const europeanDateTransactions = makeDateEuropean<Transaction>(transactions)
  const states = createStatesFromTransactions(europeanDateTransactions);
  const rows = createTableRows<State>(states);

  return (
    <>
      <Table title={"States"} headers={tableHeaders} rows={rows} />
    </>
  );
};

export default StatesPage;
