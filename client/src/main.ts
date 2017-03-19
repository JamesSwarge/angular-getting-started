/// <reference path="extension.d.ts" />
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import iocHelper from "./iocHelper";
import {ReflectiveInjector} from "@angular/core";
iocHelper.configIoC().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule)
})