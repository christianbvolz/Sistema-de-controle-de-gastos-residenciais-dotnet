using backend.Models;
using backend.Dto;

namespace backend.Repository
{
  public interface ITransactionRepository
  {
    TransactionDto AddTransaction(TransactionDto transactionDto);
    List<Transaction> GetAllTransactions();
  }
}