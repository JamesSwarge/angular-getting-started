import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IoCNames, AppCommon, IResourceManager } from "./modules/common/index";
import appConfig from "./config/appConfig";
import helperFacade from "./modules/common/index";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppCommon,
        RouterModule.forRoot(appConfig.routes)
    ],
    declarations: [appConfig.layout],
    bootstrap: [appConfig.layout],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Application {
    constructor(ref: ApplicationRef) {
        helperFacade.appHelper.setInjector(ref["_injector"]);
        helperFacade.appHelper.setConfig(appConfig);
        let resourceManager: IResourceManager = window.ioc.resolve(IoCNames.IResource);
        resourceManager.load(appConfig.localization.files);
    }
}