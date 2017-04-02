namespace App.Service.Impl
{
    using Repository;
    using Repository.Impl;
    using System.Collections.Generic;
    using System.Linq;

    public class UserService : IUserService
    {
        public IList<UserSummary> GetUsers()
        {
            IUserRepository userRepo = new UserRepository();
            return userRepo.GetUsers().Select(user => new UserSummary(user.FirstName, user.LastName)).ToList();
        }
    }
}
