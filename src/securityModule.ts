import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import {Users} from "./users";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Users],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }