import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Users } from "./users";
import { UserSummary } from "./userSummary";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Users, UserSummary],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }