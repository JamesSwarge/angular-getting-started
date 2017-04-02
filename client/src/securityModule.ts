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
// import { UserService } from "./userService";
import { UserSummary } from "./userSummary";
import { RedColor } from "./redColor";
//import { FormInput } from "./formInput";

//import { Page } from "./page";
//import appHelper from "./appHelper";
//import appHelper from "./modules/common";
// import { HttpConnector } from "./httpConnector";
//import { FormButton } from "./formButton";
//import { FormPrimaryButton } from "./formPrimaryButton";
//import { HorizalForm } from "./horizalForm";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, CommonModule, RouterModule, RouteConfig],
    declarations: [
        DefaultLayout, DefaultPage, Users, AddNewUser, EditUser, 
        UserSummary, RedColor /*, FormInput, FormButton, HorizalForm, FormPrimaryButton*/
    ],
    bootstrap: [DefaultLayout],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule {
}