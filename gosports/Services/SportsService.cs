using gosports.Models;
using gosports.Repositories;

namespace gosports.Services
{
    public interface ISportsService
    {
        Sports GetAll();

        SportMatches GetBySport(string id);
    }

    public class SportsService : ISportsService
    {
        private readonly ISportsRepository _repository;

        public SportsService(ISportsRepository repository)
        {
            _repository = repository;
        }

        public SportMatches GetBySport(string id)
        {
            return _repository.GetBySport(id);
        }

        public Sports GetAll()
        {
            return _repository.GetAll();
        }
    }
}
