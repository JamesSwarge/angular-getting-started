import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppCommon, BaseModule } from "./../common/index";
import { FormsModule } from "@angular/forms";
import { ContentTypes } from "./contentType/contentTypes";
import { AddOrUpdateContentType } from "./contentType/addOrUpdateContentType";
import { SettingRoute } from "./settingRoute";
import route from "./_share/config/route";
@NgModule({
    imports: [FormsModule, AppCommon, SettingRoute],
    declarations: [ContentTypes, AddOrUpdateContentType],
    exports: [ContentTypes],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingModule extends BaseModule {
    constructor() {
        super();
        this.name = "setting";
        this.registerModuleRoutes(route);
    }
}