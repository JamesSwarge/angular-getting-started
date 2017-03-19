namespace Api.Repository
{
    using System.Collections.Generic;
    using Api.Context;
    public interface IUserRepository
    {
        IList<User> GetUsers();
        void CreateUser(User user);
        User GetUserByUserName(string userName);
    }
}