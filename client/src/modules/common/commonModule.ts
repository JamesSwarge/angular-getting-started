import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { Page } from "./components/page";
import { HorizalForm } from "./components/horizalForm";
import { FormPrimaryButton } from "./components/formPrimaryButton";
import { FormInput } from "./components/formInput";
import { FormButton } from "./components/formButton";
import { Style } from "./components/style";
import { Script } from "./components/script";
import { Grid } from "./components/grid/grid";
@NgModule({
    imports: [FormsModule, HttpModule, RouterModule],
    declarations: [Page, HorizalForm, FormPrimaryButton, FormInput, FormButton, Style, Script, Grid],
    exports: [FormsModule, HttpModule, RouterModule, Page, HorizalForm, FormPrimaryButton, FormInput, Style, Script, Grid]
})
export class AppCommon { }