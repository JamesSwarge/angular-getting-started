namespace API.Repositories
{
    using System.Collections.Generic;
    using API.Models;
    using Context;
    using System.Linq;

    public class UserRepository : IUserRepository
    {
        private DbContext context;
        public UserRepository()
        {
            this.context = new DbContext();
        }
        public IList<User> GetUsers()
        {
            return this.context.Users.ToList();
        }

        public void CreateUser(User user) {
            this.context.Users.Add(user);
            this.context.SaveChanges();
        }
    }
}