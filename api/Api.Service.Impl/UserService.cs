namespace Api.Service.Impl
{
    using System;
    using System.Collections.Generic;
    using Api.Context;
    using Api.Repository;
    using Api.Repository.Impl;
    using Common.Exception;

    public class UserService : IUserService
    {
        public IList<User> GetUsers()
        {
            IUserRepository repo = new UserRepository();
            return repo.GetUsers();
        }

        public void CreateUser(User user)
        {
            ValidateCreateRequest(user);
            IUserRepository repo = new UserRepository();
            repo.CreateUser(user);
        }

        private void ValidateCreateRequest(User user)
        {
            var validation = new ValidationException();
            if (string.IsNullOrWhiteSpace(user.FirstName))
            {
                validation.AddError("user.create.firstNameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(user.LastName))
            {
                validation.AddError("user.create.firstNameIsRequired");
            }
            validation.ThrowIfError();
        }

        public LoginResponse Login(LoginRequest request)
        {
            ValidateLogin(request);
            IUserRepository repo = new UserRepository();
            User user = repo.GetUserByUserName(request.UserName);
            return new LoginResponse(user.FirstName, user.LastName);
        }

        private void ValidateLogin(LoginRequest request)
        {
            IUserRepository repo = new UserRepository();
            User user = repo.GetUserByUserName(request.UserName);
            if (user == null)
            {
                throw new ValidationException("user.login.invalidCredential");
            }
        }
    }
}