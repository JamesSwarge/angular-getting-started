namespace App.Service
{
    using System.Collections.Generic;
    public interface IUserService
    {
        IList<UserSummary> GetUsers();
    }
}
