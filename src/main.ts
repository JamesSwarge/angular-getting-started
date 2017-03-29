/// <reference path="../resources/js/jsextension.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import iocHelper from "./iocHelper";
/*
window.ioc
*/
iocHelper.config().subscribe(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule);
})
