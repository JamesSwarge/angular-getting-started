namespace App.Repository
{
    using Context;
    using System.Collections.Generic;
    public interface IUserRepository
    {
        IList<User> GetUsers();
    }
}
