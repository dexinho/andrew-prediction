import { Order } from "../../types/types";
import { getErrorMessage } from "./getErrorMessage";
import supabase from "./supabaseConnection";

export const getOrders = async (): Promise<Order[] | null> => {
  try {
    const { data, error } = await supabase.from("orders").select("*").limit(100);

    if (error) throw error;

    console.log("Fetched orders:", data);

    return data;
  } catch (error) {
    console.log("Error", getErrorMessage(error));

    return null;
  }
};
