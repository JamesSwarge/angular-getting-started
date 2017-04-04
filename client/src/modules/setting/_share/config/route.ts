let routes: any = getRoute();
export default routes;
function getRoute() {
    let route: any = {
        contentType: {
            contentTypes: {
                name: "setting.contentType.contentTypes",
                path: "contentTypes"
            },
            addContentType: {
                name: "setting.contentType.addContentType",
                path: "contentType/addContentType"
            }
        }
    };
    return route;
}