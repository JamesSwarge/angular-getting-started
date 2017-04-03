const MODULE_PATTERN = "src/modules/{0}/{0}Module#{1}Module";
import {IModuleConfig} from "../models/imoduleConfig";
let routeHelper = {
    getModuleRoute: getModuleRoute
};
export default routeHelper;

function getModuleRoute(modules: Array<IModuleConfig>) {
    let routes: Array<any> = [];
    modules.forEach((module: any) => {
        routes.push({ path: module.urlPrefix, loadChildren: getModuleFullPath(module.path) });
    });
    return routes;
}

function getModuleFullPath(moduleName: string) {
    return String.format(MODULE_PATTERN, moduleName, String.toPascalCase(moduleName))
}