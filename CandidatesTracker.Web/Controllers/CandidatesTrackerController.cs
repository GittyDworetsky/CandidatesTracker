using CandidatesTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidatesTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesTrackerController : ControllerBase
    {
        private string _connectionString;

        public CandidatesTrackerController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("/getcounts")]
        public CandidateCounts GetCounts()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetCounts();
        }

        [HttpPost]
        [Route("/add")]
        public void Add(Candidate candidate)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            repo.Add(candidate);
        }


        [HttpGet]
        [Route("/getpending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetPending();
        }

        [HttpGet]
        [Route("/getconfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetConfirmed();
        }

        [HttpGet]
        [Route("/getrefused")]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetRefused();
        }

        [HttpGet]
        [Route("/getbyid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("/updateCandidateStatus")]
        public void UpdateCandidateStatus(int id, RegistrationStatus status)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            repo.UpdateCandidateStatus(id, status);

        }
    }
}
