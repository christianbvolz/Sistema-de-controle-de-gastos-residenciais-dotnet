namespace backend.Repository
{
  using backend.Dto;
  using backend.Models;
  using Microsoft.EntityFrameworkCore;

  public class TransactionRepository(DataBaseContext context) : ITransactionRepository
  {
    private readonly DataBaseContext _context = context;

    public TransactionDto AddTransaction(TransactionDto transactionDto)
    {
      var user = _context.Users.Find(transactionDto.UserId) ?? throw new InvalidOperationException("User does not exist.");
      
      if (user.Age < 18 && transactionDto.Type == "receita")
      {
        throw new InvalidOperationException("Age must be greater than 18");
      }

      var transaction = new Transaction
      {
        Description = transactionDto.Description,
        TransactionId = transactionDto.TransactionId,
        Type = transactionDto.Type,
        Value = transactionDto.Value,
        User = user
      };

      _context.Add(transaction);
      _context.SaveChanges();

      return transactionDto;
    }

    public List<Transaction> GetAllTransactions()
    {
      return [.. _context.Transactions.Include(t => t.User)
       .Select(t => new Transaction
       {
         TransactionId = t.TransactionId,
         Description = t.Description,
         Value = t.Value,
         Type = t.Type,
         UserId = t.UserId,
         User = new User
         {
           UserId = t.UserId,
           Name = t.User.Name,
           Age = t.User.Age
         }
       })];
    }
  }

}
