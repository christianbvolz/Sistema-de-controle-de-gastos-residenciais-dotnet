import React, { useState, useEffect } from 'react';
import Context from './context';
import { Transaction, UserList } from '../types/types';
import { listAllTransactions, listAllUsers } from '../api/requests';
import { toFloat } from '../utils';

type ContextProviderProps = {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userList, setUserList] = useState<UserList[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchUsers = async () => {
    const allUsers = await listAllUsers();
    
          const allUsersMap = allUsers.map(({ id, name, age, transactions }) => {
            let receita = 0;
            let despesa = 0;
    
            // Calculate total for each user's transactions.
            transactions.forEach(({ value, type }) => {
              if (type === "despesa") {
                despesa += +value;
              } else {
                receita += +value;
              }
            });
    
            // Format values to two decimal places.
            receita = toFloat(receita);
            despesa = toFloat(despesa);
    
            const total = toFloat(receita - despesa);
    
            // Return user data with total.
            return { id, name, age, receita, despesa, total };
          });
    
          setUserList(allUsersMap);
  };

  const fetchTransactions = async () => {
    const fetchedTransactions = await listAllTransactions();
    setTransactions(fetchedTransactions);
  };

  const refreshTransactions = async () => {
    await fetchTransactions();
  };

  const refreshUsers = async () => {
    await fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
    fetchTransactions();
  }, []);

  return (
    <Context.Provider value={{ userList, transactions, refreshUsers, refreshTransactions}}>
      {children}
    </Context.Provider>
  )
};

export default ContextProvider;