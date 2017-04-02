namespace App.Repository.Impl
{
    using System.Collections.Generic;
    using App.Context;
    using System.Linq;

    public class UserRepository : IUserRepository
    {
        public IList<User> GetUsers()
        {
            MyContext context = new MyContext();
            return context.Users.ToList();
        }
    }
}
