const MODULE_PATTERN = "app/modules/{0}/module#{1}Module";
let routeHelper = {
    getModuleRoute: getModuleRoute
};
export default routeHelper;

function getModuleRoute(modules: Array<any>) {
    let routes: Array<any> = [];
    modules.forEach((module: any) => {
        routes.push({ path: module.urlPrefix, loadChildren: getModuleFullPath(module.path) });
    });
    return routes;
}

function getModuleFullPath(moduleName: string) {
    return String.format(MODULE_PATTERN, moduleName, String.toPascalCase(moduleName))
}