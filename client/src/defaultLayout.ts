import { Component, ApplicationRef } from "@angular/core";
//import appHelper from "./appHelper";
import helperFacade from "./modules/common/index";
import appConfig from "./appConfig";
@Component({
    selector:"default-layout",
    templateUrl: "src/defaultLayout.html"
})
export class DefaultLayout {
    constructor(app: ApplicationRef){
        let injector = app["_injector"];
        helperFacade.appHelper.setInjector(injector);
        helperFacade.appHelper.setConfig(appConfig);
    }
}