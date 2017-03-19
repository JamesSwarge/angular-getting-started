namespace Api.Context
{
    using System.Data.Entity;
    public class DbContext : System.Data.Entity.DbContext
    {
        public DbContext() : base("Default")
        {
        }
        public DbSet<User> Users { get; set; }
    }
}