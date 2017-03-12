namespace API.Services
{
    using System.Collections.Generic;
    using API.Models;
    using Repositories;

    public class UserService : IUserService
    {
        public IList<User> GetUsers()
        {
            IUserRepository repo = new UserRepository();
            return repo.GetUsers();
        }

        public void CreateUser(User user) {
            IUserRepository repo = new UserRepository();
            repo.CreateUser(user);
        }
    }
}