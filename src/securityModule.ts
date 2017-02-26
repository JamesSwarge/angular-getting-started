import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DefaultLayout } from "./defaultLayout";
import { DefaultPage } from "./defaultPage";
import { RouteConfig } from "./routeConfig";
import { Users } from "./users";
import { AddNewUser } from "./addNewUser";
import { EditUser } from "./editUser";
import {UserService} from "./userService";
import {UserSummary} from "./userSummary";
import {RedColor} from "./redColor";
import {FormInput}  from "./formInput";
@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, RouteConfig],
    declarations: [DefaultLayout, DefaultPage, Users, AddNewUser, EditUser, UserSummary, RedColor, FormInput],
    bootstrap: [DefaultLayout],
    providers:[]
})
export class SecurityModule { }
