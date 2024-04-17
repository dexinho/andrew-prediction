import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./supabaseConnection";
import { getErrorMessage } from "./getErrorMessage";
import { Transaction } from "../../types/types";
import { revalidatePath } from "next/cache";

export const getTransactions = async (): Promise<Transaction[] | null> => {
  try {
    const { data, error }: PostgrestResponse<Transaction> = await supabase
      .from("transactions")
      .select("*");

    if (error) {
      throw error;
    }
    revalidatePath("/transactions");
    console.log("data", data);

    return data;
  } catch (error: unknown) {
    console.error("Error fetching transactions:", getErrorMessage(error));

    return null;
  }
};
