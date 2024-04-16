import { State, Transaction } from "../../types/types";

export const createStatesFromTransactions = (
  transactions: Transaction[] | null
) => {
  if (!transactions || transactions.length === 0) return [];

  const states: State[] = [
    {
      transaction_id: transactions[0]?.id,
      factory: 1,
      ocean: 0,
      inventory: 0,
      customer: 0,
      timestamp: transactions[0]?.timestamp,
    },
  ];

  transactions.forEach((transaction, index) => {
    if (index === 0) return;

    const newFactoryState =
      transaction.to_state === "factory"
        ? states[index - 1].factory + 1
        : transaction.from_state === "factory"
        ? states[index - 1].factory - 1
        : states[index - 1].factory;

    const newOceanState =
      transaction.to_state === "ocean"
        ? states[index - 1].ocean + 1
        : transaction.from_state === "ocean"
        ? states[index - 1].ocean - 1
        : states[index - 1].ocean;

    const newInventoryState =
      transaction.to_state === "inventory"
        ? states[index - 1].inventory + 1
        : transaction.from_state === "inventory"
        ? states[index - 1].inventory - 1
        : states[index - 1].inventory;

    const newCustomerState =
      transaction.to_state === "customer"
        ? states[index - 1].customer + 1
        : states[index - 1].customer;

    states.push({
      transaction_id: transaction.id,
      factory: newFactoryState,
      ocean: newOceanState,
      inventory: newInventoryState,
      customer: newCustomerState,
      timestamp: transaction.timestamp,
    });
  });

  return states;
};
