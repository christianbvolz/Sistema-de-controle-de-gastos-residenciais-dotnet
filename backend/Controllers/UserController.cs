namespace backend.Controllers;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Repository;


[ApiController]
[Route("[controller]")]
public class UserController(UserRepository repository) : ControllerBase
{

    private readonly UserRepository _repository = repository;

    [HttpPost]
    public IActionResult AddUser()
    {
        var user = new User
        {
            Name = "John Doe",
            Age = 30
        };

        _repository.Add(user);

        return Ok(new { message = "user added" });
    }
}