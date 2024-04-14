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
          <Button type="submit" title="CREATE ORDER" />
        </div>
      </form>
    </>
  );
};

export default Form;
