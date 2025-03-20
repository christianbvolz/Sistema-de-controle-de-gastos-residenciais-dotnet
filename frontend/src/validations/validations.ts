export const validateUserName = (name: string) => name.length >= 3;

export const validateUserAge = (age: number) => age >= 1 && age <= 120;

export const validateTransactionDescription = (description: string) => description.length >= 5;

export const validateTransactionValue = (value: number) => value > 0;

export const validateTransactionType = (type: string) => ['despesa', 'receita'].includes(type);

export const validateUserId = (userId: number) => userId > 0 && Number.isInteger(userId);
