//import { HttpConnector } from "../modules/common/index";
import { IAppConfig } from "../modules/common/index";
import { DefaultLayout } from "../themes/default/defaultLayout";
import modules from "./modules";
import helperFacade from "../modules/common/index";
import ioc from "./ioc";
import {LANG} from "../modules/common/index";
//import { IoCNames, IoCLifeCycle } from "../modules/common/index";
//import { UserService } from "../modules/security/_share/services/userService";
let appConfig: IAppConfig = {
    localization:{
        lang: LANG.EN
    },
    localeUrl:"/resources/locales/",
    rootApi: "http://localhost:3000/api/",
    ioc: ioc,
    layout: DefaultLayout,
    routes: helperFacade.routeHelper.getModuleRoute(modules)

    /*rootApi: "http://localhost:3000/api/",
    ioc: [
        { name: IoCNames.IUserService, instance: UserService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
    */
}
export default appConfig