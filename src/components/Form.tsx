"use client";

import { testForm } from "@/actions/formAction";
import supabase from "@/utility/supabaseConnection";
import { ChangeEvent, useState } from "react";
import Button from "./Button";

type OrderProps = {
  title: string;
};

const Form = ({ title }: OrderProps) => {
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
      <form action={testForm}>
        <div className="flex flex-col p-2 gap-4">
          <input
            className="border p-2 rounded-2xl"
            type="text"
            placeholder="Company name"
            name="companyName"
            required
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
          <label htmlFor="orderDate">Order Date:</label>
          <input
            className="border p-2 rounded-2xl"
            type="date"
            value={orderDate}
            onChange={handleFormDateChange}
            name="orderDate"
            required
          />
          <label htmlFor="expected-delivery">Expected Delivery Date:</label>
          <input
            className="border p-2 rounded-2xl"
            type="date"
            value={orderDate}
            onChange={handleFormDateChange}
            name="expected-delivery"
          />
          <label htmlFor="item">Item:</label>
          <select
            name="item"
            className="text-center mb-6 border p-1 rounded-2xl"
          >
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <Button type="submit" title="CREATE ORDER" />
        </div>
      </form>
    </>
  );
};

export default Form;
