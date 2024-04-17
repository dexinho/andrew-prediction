import Table from "@/components/Table";
import createTableRows from "@/utility/createTableRows";
import { getOrders } from "@/utility/getOrders";
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

const OrdersPage = async () => {
  const orders = await getOrders();
  const rows = createTableRows<Order>(orders);

  return (
    <div className=" ">
      <Table title={"Orders"} headers={header} rows={rows}></Table>
    </div>
  );
};

export default OrdersPage;
