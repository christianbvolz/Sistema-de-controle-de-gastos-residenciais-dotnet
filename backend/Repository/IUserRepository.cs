using backend.Models;
using backend.Dto;

namespace backend.Repository
{
  public interface IUserRepository
  {
    UserDto AddUser(User user);
    UserDto? GetUser(int userId);
    List<UserDto> GetAllUser();
    void DeleteUser(int userId);
  }
}