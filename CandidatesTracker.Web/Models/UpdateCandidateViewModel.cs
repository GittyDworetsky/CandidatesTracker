using CandidatesTracker.Data;

namespace CandidatesTracker.Web.Models
{
    public class UpdateCandidateViewModel
    {
        public int Id { get; set; }
        public RegistrationStatus Status { get; set; }
    }
}
