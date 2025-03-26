namespace backend.Dto
{
  public class UserDto
  {
    public int UserId { get; set; }
    public string? Name { get; set; }
    public byte Age { get; set; }
    public ICollection<TransactionDto>? Transactions { get; set; }
  }
}
