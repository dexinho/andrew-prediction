import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "./supabaseConnection";
import { getErrorMessage } from "./getErrorMessage";

type Transaction = {
  id: string;
  order_id: string;
  timestamp: string;
  from_state: number;
  to_state: number;
};

export const getTransactions = async (): Promise<Transaction[] | null> => {
  try {
    const { data, error }: PostgrestResponse<Transaction> = await supabase
      .from("transactions")
      .select("*");

    if (error) {
      throw error;
    }

    console.log("data", data);

    return data;
  } catch (error: unknown) {
    console.error("Error fetching transactions:", getErrorMessage(error));

    return null;
  }
};
