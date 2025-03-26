namespace backend.Controllers;
using Microsoft.AspNetCore.Mvc;
using backend.Repository;
using backend.Dto;

[ApiController]
[Route("[controller]")]
public class TransactionController(ITransactionRepository repository) : ControllerBase
{
    private readonly ITransactionRepository _repository = repository;

    [HttpPost]
    public IActionResult AddTransaction([FromBody] TransactionDto transactionDto)
    {
        return Created("transaction added", _repository.AddTransaction(transactionDto));
    }

    [HttpGet]
    public IActionResult GetAllTransactions()
    {
        return Ok(_repository.GetAllTransactions());
    }
}
