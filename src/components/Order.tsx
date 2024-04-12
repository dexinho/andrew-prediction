"use client";

import { ChangeEvent, useState } from "react";

type OrderProps = {
  title: string;
};

const Order = ({ title }: OrderProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const [orderDate, setOrderDate] = useState<string>(`${year}-${month}-${day}`);

  const handleFormDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderDate(e.target.value);
  };

  return (
    <>
      <div className="text-xl font-bold mb-4">{title}</div>
      <form method="POST">
        <div className="flex flex-col p-2 gap-4">
          <input
            className="border p-2 rounded-2xl"
            type="text"
            placeholder="Company name"
            name="companyName"
          />
          <input
            className="border p-2 rounded-2xl"
            type="number"
            placeholder="Quantity"
            required
            min={1}
            step={1}
            max={10}
            name="quantity"
          />
          <input
            className="border p-2 rounded-2xl"
            type="date"
            value={orderDate}
            onChange={handleFormDateChange}
            name="orderDate"
          />
          <button
            className="border h-8 rounded-2xl bg-orange-200 hover:bg-slate-200"
            type="submit"
          >
            CREATE ORDER
          </button>
        </div>
      </form>
    </>
  );
};

export default Order;
