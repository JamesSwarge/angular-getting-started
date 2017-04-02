/// <reference path="extension.d.ts" />
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
//import iocHelper from "./iocHelper";
import helperFacade from "./modules/common/index";
import appConfig from "./appConfig";
helperFacade.iocHelper.configIoC(appConfig).then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule);
})