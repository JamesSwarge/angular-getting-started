import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import appConfig from "./config/appConfig";
@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appConfig.routes)
    ],
    bootstrap:[appConfig.layout]
})
export class Application{}