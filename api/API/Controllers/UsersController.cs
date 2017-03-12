namespace API.Controllers
{
    using Models;
    using Services;
    using System.Collections.Generic;
    using System.Web.Http;

    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IList<User> GetUsers()
        {
            IUserService userService = new UserService();
            return userService.GetUsers();
        }
        [Route("")]
        [HttpPost()]
        public void CreateUser([FromBody]User user) {
            IUserService userService = new UserService();
            userService.CreateUser(user);
        }
    }
}
