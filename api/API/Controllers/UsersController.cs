namespace API.Controllers
{
    using Api.Common.Attributes;
    using Api.Context;
    using Api.Service;
    using Api.Service.Impl;
    using System.Collections.Generic;
    using System.Web.Http;

    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LoginResponse Login(LoginRequest request)
        {
            IUserService userService = new UserService();
            LoginResponse loginResponse = userService.Login(request);
            return loginResponse;
        }

        [Route("")]
        [HttpGet]
        [ResponseWrapper]
        public IList<User> GetUsers()
        {
            IUserService userService = new UserService();
            return userService.GetUsers();
        }

        [Route("")]
        [HttpPost()]
        [ResponseWrapper]
        public string CreateUser([FromBody]User user)
        {
            IUserService userService = new UserService();
            userService.CreateUser(user);
            return string.Empty;
        }
    }
}
