import Table from "@/components/Table";
import { getTransactions } from "@/utility/getTransactions";

const tableHeaders = [
  "Transaction_id",
  "Factory",
  "Ocean",
  "Inventory",
  "Customer",
  "Timestamp",
];

const states = [
  ["1", 1, 0, 0, 0, "2024-04-16 00:00:00"],
  ["1", 0, 1, 0, 0, "2024-04-26 00:00:00"],
  ["1", 0, 0, 1, 0, "2024-05-16 00:00:00"],
];

const StatesPage = async () => {
  const transactions = await getTransactions();
  // console.log(transactions);

  return (
    <>
      <h1 className="text-center my-4 text-3xl font-bold">STATES</h1>
      <Table headers={tableHeaders} rows={states} />
    </>
  );
};

export default StatesPage;
