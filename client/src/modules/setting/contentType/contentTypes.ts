import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BasePage, IoCNames } from "../../common/index";
// import { Component } from "angular2/core";
// import { Router } from "angular2/router";
// import { BasePage } from "../../../common/models/ui";
import { ContentTypesModel } from "./contentTypesModel";
import { ISettingService } from "../_share/services/isettingService";
// import { Grid, PageActions, Page } from "../../../common/directive";
// import { PageAction } from "../../../common/models/ui";
// import route from "../_share/config/route";
@Component({
    templateUrl: "src/modules/setting/contentType/contentTypes.html"
})
export class ContentTypes extends BasePage<ContentTypesModel> {
    constructor(router: Router) {
        super(router);
        let self = this;
        self.model = new ContentTypesModel(self.i18nHelper);
        self.load();
        //this.model.addPageAction(new PageAction("btnAddNew", "setting.contentTypes.addNewAction", () => self.onAddNewItemClicked()));
    }
    private onAddNewItemClicked() {
        //this.router.navigate([route.setting.addContentType.name]);
    }
    public onEditItemClicked(event: any) {
        //this.router.navigate([route.setting.editContentType.name, { id: event.item.id }]);
    }
    public onDeleteItemClicked(event: any) {
        // let self = this;
        // settingService.deleteContentType(event.item.id).then(function () {
        //     self.load();
        // });
    }
    private load() {
        let self = this;
        let settingService: ISettingService = window.ioc.resolve(IoCNames.ISettingService);
        settingService.getContentTypes().then(function (items: Array<any>) {
            self.model.import(items);
        });
    }
}