namespace backend.Models
{
  using System.ComponentModel.DataAnnotations;
  using System.ComponentModel.DataAnnotations.Schema;

  public class Transaction
  {
    [Key]
    public int TransactionId { get; set; }

    [Required]
    public required string Description { get; set; }

    [Required]
    [Column(TypeName = "decimal(5, 2)")]
    public float Value { get; set; }

    [Required]
    [RegularExpression("despesa|receita", ErrorMessage = "Type must be either 'despesa' or 'receita'")]
    public required string Type { get; set; }

    [Required]
    [ForeignKey("UserId")]
    public int UserId { get; set; }

    public required User User { get; set; }
  }
}
