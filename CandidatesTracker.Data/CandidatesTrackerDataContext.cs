using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public class CandidatesTrackerDataContext : DbContext
    {

        private readonly string _connectionString;

        public CandidatesTrackerDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<CandidateCounts> CandidateCounts { get; set; }


    }
}
