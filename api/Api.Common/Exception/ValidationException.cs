namespace Api.Common.Exception
{
    using System;
    using System.Collections.Generic;
    public class ValidationException : System.Exception
    {
        public IList<string> Errors { get; set; }
        public ValidationException()
        {
            this.Errors = new List<string>();
        }
        public ValidationException(string messageKey) : this()
        {
            this.AddError(messageKey);
        }

        public void AddError(string messageKey)
        {
            this.Errors.Add(messageKey);
        }

        public void ThrowIfError()
        {
            if (this.Errors.Count <= 0) { return; }
            throw this;
        }
    }
}
