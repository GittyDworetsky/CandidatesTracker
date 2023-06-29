using CandidatesTracker.Data;
using CandidatesTracker.Web.Models;
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

        
        [Route("getcounts")]
        [HttpGet]
        public CandidateCounts GetCounts()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetCounts();
        }

        [HttpPost]
        [Route("add")]
        public void Add(Candidate candidate)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            repo.Add(candidate);
        }


        [Route("getpending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetPending();
        }

        [Route("getconfirmed")]
        [HttpGet]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetConfirmed();
        }

        [Route("getrefused")]
        [HttpGet]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetRefused();
        }

        [Route("getbyid")]
        [HttpGet]
        public Candidate GetById(int id)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost]
        [Route("updateCandidateStatus")]
        public void UpdateCandidateStatus(UpdateCandidateViewModel vm)
        {
            var repo = new CandidatesTrackerRepository(_connectionString);
            repo.UpdateCandidateStatus(vm.Id, vm.Status);

        }
    }
}
