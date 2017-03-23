"use strict";
let routeHelper = {
    getModuleRoute: getModuleRoute
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeHelper;
function getModuleRoute(modules) {
    let routes = [];
    modules.forEach((module) => {
        routes.push({ path: module.urlPrefix, loadChildren: module.path });
    });
    return routes;
}
//# sourceMappingURL=routeHelper.js.map