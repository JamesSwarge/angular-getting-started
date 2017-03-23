import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import appConfig from "./config/appConfig";
import {CommonModule} from "./modules/common/module";
@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(appConfig.routes)
    ],
    declarations:[appConfig.layout],
    bootstrap:[appConfig.layout]
})
export class Application{}