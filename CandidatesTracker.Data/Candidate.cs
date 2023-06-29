using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public enum RegistrationStatus
    {
        Pending,
        Confirmed,
        Refused
    }

    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int PhoneNumber { get; set; }
        public string Notes { get; set; }
        public RegistrationStatus Status { get;set; }
    }
}
