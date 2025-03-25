namespace backend.Repository
{

  using Microsoft.EntityFrameworkCore;
  using backend.Models;

  public class UserRepository(DataBaseContext context)
    {
    private readonly DataBaseContext _context = context;

        public User Add(User user)
    {
      _context.Add(user);
      _context.SaveChanges();
      return user;
    }

    public List<User>? GetUsers()
    {
      var query = _context.Users.ToList();

      return query;
    }

    public User GetById(int id)
    {
      return _context.Users.Where(e => e.UserId == id).Include(e => e.Transactions).First();
    }

    public virtual void DeleteUser(int id)
    {
      var User = _context.Users.Include(e => e.Transactions).Single(p => p.UserId == id);
      _context.Remove(User);

      _context.SaveChanges();
    }
  }
}