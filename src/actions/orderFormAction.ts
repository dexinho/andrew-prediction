"use server";

import { getErrorMessage } from "@/utility/getErrorMessage";
import supabase from "@/utility/supabaseConnection";
import { revalidatePath } from "next/cache";

export const orderFormAction = async (formData: FormData) => {
  try {
    const formFromEntries = Object.fromEntries(formData);
    console.log(formFromEntries);
    const { company_name, quantity, item, expected_delivery_date } =
      formFromEntries;

    const { error } = await supabase.from("orders").insert({
      company_name,
      quantity,
      item,
      expected_delivery_date,
    });

    if (error) throw error;
  } catch (error: unknown) {
    getErrorMessage(error);
  }

  revalidatePath("/");
};
