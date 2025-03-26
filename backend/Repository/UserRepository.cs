namespace backend.Repository
{
  using backend.Dto;
  using backend.Models;
  using Microsoft.EntityFrameworkCore;

  public class UserRepository(DataBaseContext context) : IUserRepository
  {
    private readonly DataBaseContext _context = context;

    public UserDto AddUser(User user)
    {
      _context.Add(user);
      _context.SaveChanges();

      return _context.Users.Where(u => u.UserId == user.UserId)
       .Select(u => new UserDto { UserId = u.UserId, Name = u.Name, Age = u.Age })
       .First();
    }

    public UserDto? GetUser(int userId)
    {
      return _context.Users
        .Include(u => u.Transactions)
        .Where(u => u.UserId == userId)
        .Select(u => new UserDto
        {
          UserId = u.UserId,
          Name = u.Name,
          Age = u.Age,
          Transactions = u.Transactions == null ?
              new List<TransactionDto>()
              : u.Transactions.Select(t => new TransactionDto
              {
                TransactionId = t.TransactionId,
                Description = t.Description,
                Type = t.Type,
                Value = t.Value,
              }).ToList()
        }).FirstOrDefault();
    }

    public List<UserDto> GetAllUser()
    {
      return [.. _context.Users.Include(u => u.Transactions)
      .Select(u => new UserDto
        {
          UserId = u.UserId,
          Name = u.Name,
          Age = u.Age,
          Transactions = u.Transactions == null ?
              new List<TransactionDto>()
              : u.Transactions.Select(t => new TransactionDto
              {
                TransactionId = t.TransactionId,
                Description = t.Description,
                Type = t.Type,
                Value = t.Value,
              }).ToList()
        })];

    }

    public void DeleteUser(int userId)
    {
      var user = _context.Users.Find(userId);
      if (user != null)
      {
        _context.Users.Remove(user);
        _context.SaveChanges();
      }
    }
  }
}
