namespace API.Services
{
    using System.Collections.Generic;
    using API.Models;
    public interface IUserService
    {
        IList<User> GetUsers();
        void CreateUser(User user);
    }
}
