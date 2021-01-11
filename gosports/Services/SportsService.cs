using System.Collections.Generic;
using gosports.Models;
using gosports.Repositories;

namespace gosports.Services
{
    public interface ISportsService
    {
        Sports GetAll();

        List<SportMatch> GetBySport(string id);

        SportMatchDetails GetByMatchId(string matchId);
    }

    public class SportsService : ISportsService
    {
        private readonly ISportsRepository _repository;

        public SportsService(ISportsRepository repository)
        {
            _repository = repository;
        }

        public List<SportMatch> GetBySport(string id)
        {
            return _repository.GetBySport(id);
        }

        public SportMatchDetails GetByMatchId(string matchId)
        {
            return _repository.GetMatchDetails(matchId);
        }

        public Sports GetAll()
        {
            return _repository.GetAll();
        }
    }
}
