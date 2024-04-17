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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const newTransactionButtonClick = () => {
    setIsClicked(!isClicked);
    setIsDialogOpen(true);
  };

  const newTransactionDecisionButtonClick = () => setIsClicked(false);
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await newTransactionFormAction(formData);
    setIsSubmitting(false);
    closeDialog();
  };

  return (
    <div className="flex flex-col">
      {isDialogOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="border  pb-2 px-2 bg-white">
            <h1 className="text-center text-3xl font-bold my-4">
              New transaction details
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center justify-center"
            >
              <div className="flex justify-between gap-4 w-full">
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
                <select
                  name="from_state"
                  className="p-2 border rounded-2xl w-full"
                  required
                >
                  <option value="" disabled>
                    Select From State
                  </option>
                  <option value="order">Order</option>
                  <option value="factory">Factory</option>
                  <option value="ocean">Ocean</option>
                  <option value="inventory">Inventory</option>
                </select>
                <select
                  name="to_state"
                  className="p-2 border rounded-2xl w-full"
                  required
                >
                  <option value="" disabled>
                    Select To State
                  </option>
                  <option value="factory">Factory</option>
                  <option value="ocean">Ocean</option>
                  <option value="inventory">Inventory</option>
                  <option value="customer">Customer</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Button
                  handleButtonClick={closeDialog}
                  type={"button"}
                  title={"Cancel"}
                />
                <Button
                  handleButtonClick={newTransactionDecisionButtonClick}
                  type={"submit"}
                  title={isSubmitting ? "Creating..." : "Create"}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
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
