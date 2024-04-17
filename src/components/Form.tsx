"use client";

import { orderFormAction } from "@/actions/orderFormAction";
import { ChangeEvent, useState } from "react";
import Button from "./Button";
import Loading from "./Loading";
import { DateState } from "../../types/types";

type FormProps = {
  title: string;
};

const Form = ({ title }: FormProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [dates, setDates] = useState<DateState>({
    orderedOn: `${year}-${month}-${day}`,
    expectedDeliveryDate: `${year}-${month}-${day}`,
  });

  const handleFormDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "order-date")
      setDates({ ...dates, orderedOn: e.target.value });
    else if (e.target.id === "expected-delivery-date")
      setDates({ ...dates, expectedDeliveryDate: e.target.value });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="border p-4 rounded-2xl">
          <div className="text-xl text-center font-bold mb-4">{title}</div>
          <form action={orderFormAction}>
            <div className="flex flex-col p-2 gap-4">
              <input
                className="border p-2 rounded-2xl"
                type="text"
                placeholder="Company name"
                name="company_name"
                required
              />
              <select name="item" className="border p-2 rounded-2xl">
                <option>Select item</option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
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
              <label htmlFor="expected_delivery_date" className="ml-1 mt-6">
                Expected Delivery Date:
              </label>
              <input
                id="expected-delivery-date"
                className="border p-2 rounded-2xl"
                type="date"
                value={dates.expectedDeliveryDate}
                onChange={(e) => handleFormDateChange(e)}
                name="expected_delivery_date"
              />
              <Button type="submit" title="CREATE ORDER" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
