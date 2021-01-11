using System.Collections.Generic;

namespace gosports.Models
{
    public class SportMatchDetails
    {
        public string Id { get; set; }
        public SportMatchDetailsInfo Info { get; set; }
        public List<SportMatchDetailsEvent> MatchDetailsEvents { get; set; }
        public List<SportEvent> Events { get; set; }
    }

    public class SportMatchDetailsInfo
    {
        public string Venue { get; set; }
        public string Date { get; set; }
        public string Referee { get; set; }
        public string League { get; set; }
        public Team HomeTeam { get; set; }
        public Team AwayTeam { get; set; }
        public int HomeTeamScore { get; set; }
        public int AwayTeamScore { get; set; }
    }

    public class SportMatchDetailsEvent
    {
        public SportEvent Event;

        public string EventTime;

        public Team TeamInfo;
    }
}
