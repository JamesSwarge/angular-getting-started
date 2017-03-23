let routeHelper = {
    getModuleRoute: getModuleRoute
};
export default routeHelper;

function getModuleRoute(modules: Array<any>) {
    let routes: Array<any> = [];
    modules.forEach((module: any) => {
        routes.push({ path: module.urlPrefix, loadChildren: module.path });
    });
    return routes;
}