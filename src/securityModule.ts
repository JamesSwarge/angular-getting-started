import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DefaultLayout } from "./defaultLayout";
import {DefaultPage} from "./defaultPage";
import {RouteConfig} from "./routeConfig";
@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, RouteConfig],
    declarations: [DefaultLayout, DefaultPage],
    bootstrap: [DefaultLayout]
})
export class SecurityModule { }
