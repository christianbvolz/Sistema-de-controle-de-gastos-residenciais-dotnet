namespace backend.Repository
{
  using Microsoft.EntityFrameworkCore;
  using backend.Models;

  public class DataBaseContext : DbContext, IDataBaseContext
  {
    public DbSet<User> Users { get; set; } = null!;
    public DbSet<Transaction> Transactions { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var connectionString = Environment.GetEnvironmentVariable("DOTNET_CONNECTION_STRING");
        if (connectionString == null)
        {
          Console.WriteLine(connectionString);
          throw new InvalidOperationException("The connection string not found");
        }

        optionsBuilder.UseSqlServer(connectionString);
      }
    }
    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //   modelBuilder.Entity<Transaction>()
    //       .HasOne(b => b.User)
    //       .WithMany(a => a.Transactions)
    //       .HasForeignKey(b => b.UserId);
    // }
  }
}
