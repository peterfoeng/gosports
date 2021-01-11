using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using gosports.Models;

namespace gosports.Repositories
{
    public interface ISportsRepository
    {
        Sports GetAll();

        List<SportMatch> GetBySport(string id);

        SportMatchDetails GetMatchDetails(string id);

        List<SportEvent> GetEvents(string id);
    }

    public class SportsRespository : ISportsRepository
    {
        public SportsRespository(IConfiguration configuration)
        {
        }

        public List<SportMatch> GetBySport(string id)
        {
            if (id == "soccer")
            {
                return new List<SportMatch>
                {
                    new SportMatch {
                        Id = "ALEAGUE-2176798",
                        AwayTeam = new Team
                        {
                            Name = "Melbourne City FC"
                        },
                        HomeTeam = new Team
                        {
                            Name = "Newcastle Jets"
                        },
                        League = "A-League"

                    },
                };
            }

            return new List<SportMatch>();
        }

        public Sports GetAll()
        {
            return new Sports
            {
                Items = new List<Sport>
                {
                    new Sport { Id = "S1", Name = "⚽ Soccer", RouteName = "soccer", Status = "active" },
                    new Sport { Id = "S2", Name = "🏊 Swimming", RouteName = "swimming", Status = "coming-soon" },
                    new Sport { Id = "C1", Name = "🏏 Cricket", RouteName = "cricket", Status = "coming-soon" },
                    new Sport { Id = "T1", Name = "🎾 Tennis", RouteName = "tennis", Status = "coming-soon" }
                }
            };
        }

        public SportMatchDetails GetMatchDetails(string id)
        {
            switch (id)
            {
                case "ALEAGUE-2176798":
                    return new SportMatchDetails
                    {
                        Id = id,
                        Info = new SportMatchDetailsInfo
                        {
                            Venue = "AAMI PARK",
                            Referee = "John Doe",
                            Date = "FRI 8 JAN, 7.00PM",
                            League = "A-League",
                            HomeTeam = new Team
                            {
                                Name = "Melbourne City FC",
                            },
                            AwayTeam = new Team
                            {
                                Name = "Newcastle Jets",
                            },
                            HomeTeamScore = 0,
                            AwayTeamScore = 0
                        },
                        Events = GetEvents("soccer"),
                        MatchDetailsEvents = new List<SportMatchDetailsEvent>()
                    };
                case "":
                    break;
            }

            return null;
        }

        public List<SportEvent> GetEvents(string id)
        {
            if (id == "soccer")
            {
                return new List<SportEvent>
                {
                    new SportEvent { Id = "SOC0001", Name = "Goal" },
                    new SportEvent { Id = "SOC0002", Name = "Free Kick" },
                    new SportEvent { Id = "SOC0003", Name = "Penalty" },
                    new SportEvent { Id = "SOC0004", Name = "Yellow Card" },
                    new SportEvent { Id = "SOC0005", Name = "Red Card" },
                    new SportEvent { Id = "SOC0006", Name = "Offside" },
                };
            }

            return new List<SportEvent>();
        }
    }
}
