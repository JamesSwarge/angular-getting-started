namespace Api.Service
{
    using System.Collections.Generic;
    using Api.Context;
    public interface IUserService
    {
        IList<User> GetUsers();
        void CreateUser(User user);
        LoginResponse Login(LoginRequest request);
    }
}
