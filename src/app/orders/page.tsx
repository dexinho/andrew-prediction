import Table from "@/components/Table";
import supabase from "@/utility/supabaseConnection";
import { promises } from "dns";

const header = [
  "ID",
  "Company Name",
  "Quantity",
  "Ordered On",
  "Delivered On",
  "Status",
  "Expected Delivery",
  "Item",
];

async function fetchAllOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    console.error("Error fetching orders:", error);
    return null;
  }

  console.log("Fetched orders:", data);

  const result = data.map((obj) => Object.values(obj));
  console.log(result);
  return result;
}

const Order = async () => {
  const rows = await fetchAllOrders();

  return (
    <div className=" ">
      <h1 className="text-4xl font-bold text-center mb-5">Orders</h1>
      <Table headers={header} rows={rows}></Table>
    </div>
  );
};

export default Order;
