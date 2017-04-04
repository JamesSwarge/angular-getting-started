import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ReflectiveInjector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppCommon, BaseModule } from "./../common/index";
import { DefaultLayout } from "../../defaultLayout";
import { DefaultPage } from "../../defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
import { UserSummary } from "./_share/components/userSummary";
import { RedColor } from "./_share/components/redColor";
import routes from "./securityRoute";
@NgModule({
    imports: [CommonModule, FormsModule, AppCommon, SecurityRoute],
    declarations: [
        DefaultLayout, DefaultPage, Users, AddNewUser, EditUser, UserSummary, RedColor
    ],
    bootstrap: [DefaultLayout],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule extends BaseModule {
    constructor() {
        super();
        this.name = "security";
        this.registerModuleRoutes(routes);
    }
}
// export class SecurityModule {
// }