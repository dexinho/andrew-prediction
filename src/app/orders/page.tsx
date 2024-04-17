import Table from "@/components/Table";
import createTableRows from "@/utility/createTableRows";
import { getOrders } from "@/utility/getOrders";
import { Order } from "../../../types/types";
import { makeDateEuropean } from "@/utility/makeDateEuropean";

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
  const europeanDateOrders = makeDateEuropean(orders)
  const rows = createTableRows<Order>(europeanDateOrders);

  return (
    <div className=" ">
      <Table title={"Orders"} headers={header} rows={rows}></Table>
    </div>
  );
};

export default OrdersPage;
