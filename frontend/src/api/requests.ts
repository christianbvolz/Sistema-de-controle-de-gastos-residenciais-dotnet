import axios from "axios";
import { Transaction, User } from "../types/types";

const baseURL = `http://localhost:${import.meta.env.VITE_API_PORT}/api`;

export async function createUser(name: string, age: number): Promise<User> {
  const { data } = await axios.post(baseURL + "/users", { name, age });
  return data;
}

export async function listAllUsers(): Promise<User[]> {
  const { data } = await axios.get(baseURL + "/users");
  return data;
}

export async function deleteUser(userId: number): Promise<void> {
  await axios.delete(baseURL + "/users/" + userId);
}


export async function createTransaction(
  description: string,
  value: number,
  type: "despesa" | "receita",
  userId: number
): Promise<Transaction> {
  const { data } = await axios.post(baseURL + "/transactions", {
    description,
    value,
    type,
    userId,
  });
  return data;
}

export async function listAllTransactions(): Promise<Transaction[]> {
  const { data } = await axios.get(baseURL + "/transactions");
  return data;
}
