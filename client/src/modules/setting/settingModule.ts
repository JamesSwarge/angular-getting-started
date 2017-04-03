import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppCommon } from "./../common/index";
import { FormsModule } from "@angular/forms";
import { ContentTypes } from "./contentType/contentTypes";
import {SettingRoute} from "./settingRoute";
@NgModule({
    imports: [FormsModule, AppCommon, SettingRoute],
    declarations: [ContentTypes],
    exports: [ContentTypes],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingModule { }