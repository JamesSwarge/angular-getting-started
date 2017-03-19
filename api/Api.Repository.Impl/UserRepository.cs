namespace Api.Repository.Impl
{
    using System.Collections.Generic;
    using Api.Context;
    using System.Linq;
    using System;

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

        public void CreateUser(User user)
        {
            this.context.Users.Add(user);
            this.context.SaveChanges();
        }

        public User GetUserByUserName(string userName)
        {
            return this.context.Users.FirstOrDefault(user => user.UserName == userName);
        }
    }
}