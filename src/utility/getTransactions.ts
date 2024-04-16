import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./supabaseConnection";
import { getErrorMessage } from "./getErrorMessage";
import { Transaction } from "../../types/types";

export const getTransactions = async (): Promise<Transaction[] | null> => {
  try {
    const { data, error }: PostgrestResponse<Transaction> = await supabase
      .from("transactions")
      .select("id, order_id, from_state, to_state, timestamp");

    if (error) {
      throw error;
    }

    console.log("data", data.length);

    return data;
  } catch (error: unknown) {
    console.error("Error fetching transactions:", getErrorMessage(error));

    return null;
  }
};
