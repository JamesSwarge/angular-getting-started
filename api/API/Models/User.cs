namespace API.Models
{
    public class User
    {
        //just for deserialize/ serialize
        public User()
        {
        }
        public User(int id, string firstName, string lastName, string userName, string avatar)
        {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.UserName = userName;
            this.Avatar = avatar;
        }
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Avatar { get; set; }
    }
}