using Api.Common.Models;

namespace Api.Service
{
    public class LoginResponse: IEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public LoginResponse(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
    }
}
