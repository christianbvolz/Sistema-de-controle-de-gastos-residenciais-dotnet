import { createContext } from "react";
import type { Transaction, UserList } from "../types/types";

type ContextType = {
  userList: UserList[];
  transactions: Transaction[];
  refreshUsers: () => Promise<void>;
  refreshTransactions: () => Promise<void>;
};

const Context = createContext({} as ContextType);

export default Context;
