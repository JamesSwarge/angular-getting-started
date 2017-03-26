import { Component, ApplicationRef } from "@angular/core";
import appHelper from "./appHelper";
@Component({
    selector:"default-layout",
    templateUrl: "src/defaultLayout.html"
})
export class DefaultLayout {
    constructor(app: ApplicationRef){
        let injector = app["_injector"];
        appHelper.setInjector(injector);
    }
}