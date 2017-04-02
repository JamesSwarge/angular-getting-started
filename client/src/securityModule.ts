import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";
import {ReflectiveInjector} from "@angular/core";
import {CommonModule} from "./modules/common/commonModule";
import { DefaultLayout } from "./defaultLayout";
import { DefaultPage } from "./defaultPage";
import { RouteConfig } from "./routeConfig";
import { Users } from "./users";
import { AddNewUser } from "./addNewUser";
import { EditUser } from "./editUser";
import { UserSummary } from "./userSummary";
import { RedColor } from "./redColor";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CommonModule, RouterModule, RouteConfig],
    declarations: [
        DefaultLayout, DefaultPage, Users, AddNewUser, EditUser,UserSummary, RedColor
    ],
    bootstrap: [DefaultLayout],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule {
}