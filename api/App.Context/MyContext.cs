namespace App.Context
{
    using System.Data.Entity;
    public class MyContext : DbContext
    {
        public MyContext() : base("DefaultConnection")
        {
        }
        public IDbSet<User> Users { get; set; }
    }
}
