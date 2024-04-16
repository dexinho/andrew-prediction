"use server";

import supabase from "@/utility/supabaseConnection";
import { revalidatePath } from "next/cache";

export const testForm = async (formData: FormData) => {
  console.log(FormData);
  const data = {
    factory: 1,
  };

  const { data: transaction, error } = await supabase
    .from("transactions")
    .insert([data]);

  console.log("proslo");

  console.log(error);
  console.log(transaction);

  revalidatePath("/");
};
