import Table from "@/components/Table";
import createTableRows from "@/utility/createTableRows";
import { getErrorMessage } from "@/utility/getErrorMessage";
import supabase from "@/utility/supabaseConnection";
import { Order } from "../../../types/types";

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

async function fetchAllOrders(): Promise<Order[] | null> {
  try {
    const { data, error } = await supabase.from("orders").select("*");

    if (error) throw error;

    console.log("Fetched orders:", data);

    return data;
  } catch (error) {
    console.log("Error", getErrorMessage(error));

    return null;
  }
}

const OrdersPage = async () => {
  const data = await fetchAllOrders();
  const rows = createTableRows<Order>(data);

  return (
    <div className=" ">
      <h1 className="text-4xl font-bold text-center mb-5">Orders</h1>
      <Table headers={header} rows={rows}></Table>
    </div>
  );
};

export default OrdersPage;
