import { AppConfiguration } from "@app/common";
import { DefaultLayout } from "../themes/default/defaultLayout";
import modules from "./modules";

let layout = DefaultLayout;
let appConfig: AppConfiguration = getAppConfig();
export default appConfig;

function getAppConfig() {
    let appConfig = {
        layout: layout,
        routes: getModuleRoute(modules)
    };
    return appConfig;
}

function getModuleRoute(modules: Array<any>) {
    let routes: Array<any> = [];
    modules.forEach((module: any) => {
        routes.push({ path: module.urlPrefix, loadChildren: module.path });
    });
    return routes;
}