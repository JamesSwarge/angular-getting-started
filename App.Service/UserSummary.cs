namespace App.Service
{
    public class UserSummary
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserSummary(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }
    }
}