using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidatesTracker.Data
{
    public class CandidatesTrackerContextFactory : IDesignTimeDbContextFactory<CandidatesTrackerDataContext>
    {
               
            public CandidatesTrackerDataContext CreateDbContext(string[] args)
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidatesTracker.Web"))
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

                return new CandidatesTrackerDataContext(config.GetConnectionString("ConStr"));
            }
        
    }
}
