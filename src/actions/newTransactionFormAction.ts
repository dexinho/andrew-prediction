"use server";

import { getErrorMessage } from "@/utility/getErrorMessage";
import supabase from "@/utility/supabaseConnection";
import { revalidatePath } from "next/cache";

export const newTransactionFormAction = async (formData: FormData) => {
  console.log("ulazi");
  try {
    const formFromEntries = Object.fromEntries(formData);
    console.log('transaction', formFromEntries);
    const { order_id, date, from_state, to_state } = formFromEntries;

    const { error } = await supabase.from("transactions").insert({
      order_id,
      date,
      from_state,
      to_state,
    });

    if (error) throw error;
  } catch (error: unknown) {
    getErrorMessage(error);
  }

  revalidatePath("/transactions");
};
