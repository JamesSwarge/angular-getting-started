namespace Api.Common.Attributes
{
    using Api.Common;
    using Api.Common.Exception;
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
                var actionResponse = (System.Net.Http.ObjectContent)actionExecutedContext.Response.Content;
                response.SetData(actionResponse.Value);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.OK, response);
            }

            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {
                response.AddErrors(((ValidationException)actionExecutedContext.Exception).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.BadRequest, response);
            }
        }

    }
}