import { State, Transaction } from "../../types/types";

const states = [
  ["1", 1, 0, 0, 0, "2024-04-16 00:00:00"],
  ["1", 0, 1, 0, 0, "2024-04-26 00:00:00"],
  ["1", 0, 0, 1, 0, "2024-05-16 00:00:00"],
];

// [
//   { id, order_id, from_state, to_state, timestamp },
//   { id, order_id, from_state, to_state, timestamp },
// ];

export const createStatesFromTransactions = (
  transactions: Transaction[] | null
) => {
  const states: State[] = [{ factory: 0, ocean: 0, inventory: 0, customer: 0 }];

  if (!transactions) return [];

  transactions.forEach((transaction, index) => {
    const newFactoryState =
      transaction.from_state === "order"
        ? states[index].factory + 1
        : transaction.from_state === "factory"
        ? states[index].factory - 1
        : states[index].factory;

    const newOceanState =
      transaction.from_state === "factory"
        ? states[index].ocean + 1
        : transaction.from_state === "ocean"
        ? states[index].ocean - 1
        : states[index].ocean;

    const newInventoryState =
      transaction.from_state === "ocean"
        ? states[index].inventory + 1
        : transaction.from_state === "inventory"
        ? states[index].inventory - 1
        : states[index].inventory;

    const newCustomerState =
      transaction.from_state === "inventory"
        ? states[index].customer + 1
        : transaction.from_state === "customer"
        ? states[index].customer - 1
        : states[index].customer;

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
