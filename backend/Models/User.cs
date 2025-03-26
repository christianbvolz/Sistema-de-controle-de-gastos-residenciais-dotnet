namespace backend.Models
{
  using System.ComponentModel.DataAnnotations;

  public class User
  {
    [Key]
    public int UserId { get; set; }

    [Required]
    [StringLength(20, MinimumLength = 4)]
    public required string Name { get; set; }

    [Required]
    [Range(1, 120)]
    public byte Age { get; set; }

    public ICollection<Transaction>? Transactions { get; set; }
  }
}
