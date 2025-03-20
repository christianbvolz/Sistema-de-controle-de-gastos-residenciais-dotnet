type User = {
  id: number;
  name: string;
  age: number;
  createdAt: Date;
  updatedAt: Date | null;
  transactions: Transaction[];
}

type UserList = {
  id: number;
  name: string;
  age: number;
  receita: number;
  despesa: number;
  total: number;
}

type Transaction = {
  id: number;
  description: string;
  value: number;
  type: 'despesa' | 'receita';
  userId: number;
  createdAt: Date;
  updatedAt: Date | null;
  user: User;
}

export type {
  User,
  UserList,
  Transaction
};
