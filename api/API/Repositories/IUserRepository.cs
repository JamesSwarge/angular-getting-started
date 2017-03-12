namespace API.Repositories
{
    using System.Collections.Generic;
    using API.Models;
    public interface IUserRepository
    {
        IList<User> GetUsers();
        void CreateUser(User user);
    }
}