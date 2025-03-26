namespace backend.Controllers;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Repository;


[ApiController]
[Route("[controller]")]
public class UserController(IUserRepository repository) : ControllerBase
{

    private readonly IUserRepository _repository = repository;

    [HttpPost]
    public IActionResult AddUser([FromBody] User user)
    {
        return Created("user added", _repository.AddUser(user));
    }

    [HttpGet("{UserId}")]
    public IActionResult GetUser(int userId)
    {
        var user = _repository.GetUser(userId);

        if (user == null) return NotFound();

        return Ok(user);
    }

    [HttpGet]
    public IActionResult GetAllUser()
    {
        var users = _repository.GetAllUser();

        return Ok(users);
    }

    [HttpDelete("{UserId}")]
    public IActionResult DeleteUser(int userId)
    {
        _repository.DeleteUser(userId);

        return Ok(new { Message = "User deleted" });
    }
}
