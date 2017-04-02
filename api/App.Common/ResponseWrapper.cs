namespace App.Common
{
    using System.Net;
    using System.Net.Http;
    using System.Web.Http.Filters;
    public class ResponseWrapper : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            IResponseData<object> response = new ResponseData<object>();
            if (actionExecutedContext.Exception == null)
            {
                var content = (ObjectContent)actionExecutedContext.ActionContext.Response.Content;
                response.SetData(content.Value);
            }
            actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.OK, response);
        }
    }
}
