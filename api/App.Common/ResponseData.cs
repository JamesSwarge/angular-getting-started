namespace App.Common
{
    public class ResponseData<TData> : IResponseData<TData>
    {
        public TData Data { get; set; }
        public void SetData(TData data)
        {
            this.Data = data;
        }
    }
}
