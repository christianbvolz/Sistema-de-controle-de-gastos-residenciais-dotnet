namespace backend.Dto
{
  public class TransactionDto
  {
    public int TransactionId { get; set; }
    public string Description { get; set; } = "";
    public float Value { get; set; }
    public string Type { get; set; } = "";
    public int UserId { get; set; }
  }
}
