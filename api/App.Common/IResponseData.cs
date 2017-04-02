namespace App.Common
{
    public interface IResponseData<TData>
    {
        void SetData(TData data);
    }
}
