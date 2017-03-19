namespace API.Controllers
{
    using Api.Common;
    using Api.Common.Exception;
    using Api.Context;
    using Api.Service;
    using Api.Service.Impl;
    using System;
    using System.Collections.Generic;
    using System.Web.Http;

    [RoutePrefix("api/users")]
    public class UsersController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IResponseData<LoginResponse> Login(LoginRequest request)
        {
            IResponseData<LoginResponse> response = new ResponseData<LoginResponse>();
            try
            {
                IUserService userService = new UserService();
                LoginResponse loginResponse = userService.Login(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
        [Route("")]
        [HttpGet]
        public IResponseData<IList<User>> GetUsers()
        {
            IResponseData<IList<User>> response = new ResponseData<IList<User>>();
            try
            {
                IUserService userService = new UserService();
                var users = userService.GetUsers();
                response.SetData(users);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
        [Route("")]
        [HttpPost()]
        public IResponseData<string> CreateUser([FromBody]User user)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                IUserService userService = new UserService();
                userService.CreateUser(user);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
    }
}
