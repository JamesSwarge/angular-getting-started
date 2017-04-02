import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Page} from "./components/page";
import {HorizalForm} from "./components/horizalForm";
import {FormPrimaryButton} from "./components/formPrimaryButton";
import {FormInput} from "./components/formInput";
import {FormButton} from "./components/formButton";
@NgModule({
    imports:[FormsModule],
    declarations:[Page, HorizalForm, FormPrimaryButton, FormInput, FormButton],
    exports:[Page, HorizalForm, FormPrimaryButton, FormInput]
})
export class CommonModule{}