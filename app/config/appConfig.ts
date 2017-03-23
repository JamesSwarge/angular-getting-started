import { AppConfiguration } from "../modules/common/module";
import { DefaultLayout } from "../themes/default/defaultLayout";
import modules from "./modules";
import routeHelper from "../modules/common/module";

let layout = DefaultLayout;
let appConfig: AppConfiguration = getAppConfig();
export default appConfig;

function getAppConfig() {
    let appConfig = {
        layout: layout,
        routes: routeHelper.getModuleRoute(modules)
    };
    return appConfig;
}

