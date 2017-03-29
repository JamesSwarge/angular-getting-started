import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HttpModule} from "@angular/http";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Users } from "./users";
import { UserSummary } from "./userSummary";
import { Page } from "./page";
import {UserService} from "./userService";
import {EditUser} from "./editUser";
import {FormInput} from "./formInput";
import {HorizontalForm} from "./horizontalForm";
import {FormButtonPrimary} from "./formButtonPrimary";
import {FormButton} from "./formButton";
import {FormButtonDefault} from "./formButtonDefault";
import {HttpConnector} from "./httpConnector";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, SecurityRoute],
    declarations: [
        DefaultPage, Users, UserSummary, Page, EditUser, FormInput, HorizontalForm, 
        FormButtonPrimary, FormButton, FormButtonDefault
    ],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[UserService, HttpConnector]
})
export class SecurityModule { }