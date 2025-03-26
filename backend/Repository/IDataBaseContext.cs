using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Repository
{
  public interface IDataBaseContext
  {
    public DbSet<User> Users { get; set; }
    public DbSet<Transaction> Transactions { get; set; }
    public int SaveChanges();
  }
}
