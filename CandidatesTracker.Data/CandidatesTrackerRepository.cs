using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public class CandidatesTrackerRepository
    {
        private string _connectionString;

        public CandidatesTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public CandidateCounts GetCounts()
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            return new CandidateCounts
            {
                Pending = context.Candidates.Count(c => c.Status == RegistrationStatus.Pending),
                Confirmed = context.Candidates.Count(c => c.Status == RegistrationStatus.Confirmed),
                Refused = context.Candidates.Count(c => c.Status == RegistrationStatus.Refused),
            };
        }

        public void Add(Candidate candidate)
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            context.Add(candidate);
            context.SaveChanges();

        }

        public List<Candidate> GetPending()
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Pending).ToList();
        }

        public List<Candidate> GetConfirmed()
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Confirmed).ToList();
        }

        public List<Candidate> GetRefused()
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.Status == RegistrationStatus.Refused).ToList();
        }

        public Candidate GetById(int id)
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateCandidateStatus(int id, RegistrationStatus status)
        {
            using var context = new CandidatesTrackerDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET Status = {status} WHERE Id = {id}");

        }



    }
}
