
namespace gosports.Models
{
    public class SportMatch
    {
        public string Id { get; set; }
        public Team HomeTeam { get; set; }
        public Team AwayTeam { get; set; }
        public string League { get; set; }
    }
}
