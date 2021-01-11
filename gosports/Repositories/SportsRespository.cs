using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using gosports.Models;

namespace gosports.Repositories
{
    public interface ISportsRepository
    {
        Sports GetAll();

        SportMatches GetBySport(string id);
    }

    public class SportsRespository : ISportsRepository
    {
        public SportsRespository(IConfiguration configuration)
        {
        }

        public SportMatches GetBySport(string id)
        {

            if (id == "soccer")
            {
                return new SportMatches
                {
                    Items = new List<SportMatch>
                    {
                        new SportMatch { Id = "ALEAGUE-0001-12JAN2021", AwayTeam = new Team {}, HomeTeam = new Team {}, League = "A-League" },
                        new SportMatch { Id = "ALEAGUE-0002-12JAN2021", AwayTeam = new Team {}, HomeTeam = new Team {}, League = "A-League" },
                    }
                };
            }

            return new SportMatches();
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
    }
}
