import { IAppConfig, LANG, Locale } from "../modules/common/index";
import { DefaultLayout } from "../themes/default/defaultLayout";
import modules from "./modules";
import helperFacade from "../modules/common/index";
import ioc from "./ioc";
let appConfig: IAppConfig = {
    localization: {
        lang: LANG.EN,
        files: [Locale.Setting, Locale.Common]
    },
    localeUrl: "/src/resources/locales/",
    rootApi: "http://localhost:3000/api/",
    ioc: ioc,
    layout: DefaultLayout,
    routes: helperFacade.routeHelper.getModuleRoute(modules)
}
export default appConfig