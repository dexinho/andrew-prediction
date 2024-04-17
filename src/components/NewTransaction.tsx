"use client";

import { ChangeEvent, useState } from "react";
import Button from "./Button";
import { newTransactionFormAction } from "@/actions/newTransactionFormAction";

const NewTransaction = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const [date, setDate] = useState<string>(`${year}-${month}-${day}`);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const newTransactionButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const newTransactionDecisionButtonClick = () => setIsClicked(false);

  return (
    <div className="flex flex-col">
      {isClicked ? (
        <div className="border pb-2 px-2">
          <h1 className="text-center my-4">New transaction details</h1>
          <form
            action={newTransactionFormAction}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <div className="flex justify-between  gap-4 w-full">
              <input
                type="text"
                name="order_id"
                placeholder="order id"
                className="p-2 border rounded-2xl w-full"
                required
              />
              <input
                type="date"
                name="date"
                className="p-2 border rounded-2xl w-full"
                value={date}
                required
                onChange={handleDateChange}
              />
            </div>
            <div className="flex justify-between gap-4 w-full">
              <input
                type="text"
                name="from_state"
                placeholder="from state"
                className="p-2 border rounded-2xl w-full"
                required
              />
              <input
                type="text"
                name="to_state"
                placeholder="to state"
                className="p-2 border rounded-2xl w-full"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button
                handleButtonClick={newTransactionDecisionButtonClick}
                type={"button"}
                title={"Cancel"}
              />
              <Button
                handleButtonClick={newTransactionDecisionButtonClick}
                type={"submit"}
                title={"Create"}
              />
            </div>
          </form>
        </div>
      ) : (
        <Button
          handleButtonClick={newTransactionButtonClick}
          type="button"
          title="New Transaction"
        />
      )}
    </div>
  );
};

export default NewTransaction;
