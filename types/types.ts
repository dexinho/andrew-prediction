export type Order = {
  id: string;
  company_name: string;
  quantity: number;
  ordered_on: string;
  delivered_on: string | null;
  status: string;
  expected_delivery: string;
  item: string;
};

export type Transaction = {
  id: string;
  order_id: string;
  date: string;
  from_state: string;
  to_state: string;
};

export type State = {
  transaction_id?: string;
  factory: number;
  ocean: number;
  inventory: number;
  customer: number;
  date?: string;
};

export type Navlink = {
  path: string;
  title: string;
};

export type DateState = {
  orderedOn: string;
  expectedDeliveryDate: string;
};
