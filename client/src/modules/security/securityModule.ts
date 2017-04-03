import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ReflectiveInjector} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AppCommon } from "./../common/commonModule";
import { DefaultLayout } from "../../defaultLayout";
import { DefaultPage } from "../../defaultPage";
import { RouteConfig } from "./routeConfig";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
import { UserSummary } from "./_share/components/userSummary";
import { RedColor } from "./_share/components/redColor";
@NgModule({
    imports: [CommonModule, FormsModule, AppCommon, RouteConfig],
    declarations: [
        DefaultLayout, DefaultPage, Users, AddNewUser, EditUser, UserSummary, RedColor
    ],
    bootstrap: [DefaultLayout],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule {
}