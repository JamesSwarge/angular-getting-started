import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {BasePage} from "../../common/index";
// import { Component } from "angular2/core";
// import { Router } from "angular2/router";
// import { BasePage } from "../../../common/models/ui";
// import { Model } from "./contentTypesModel";
// import settingService from "../_share/services/settingService";
// import { Grid, PageActions, Page } from "../../../common/directive";
// import { PageAction } from "../../../common/models/ui";
// import route from "../_share/config/route";
@Component({
    templateUrl: "src/modules/setting/contentType/contentTypes.html"
})
export class ContentTypes extends BasePage {
    constructor(router: Router) {
        super(router);
        let self = this;
        self.router = router;
        //self.model = new Model(self.i18nHelper);
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
        // let self = this;
        // settingService.getContentTypes().then(function (items: Array<any>) {
        //     self.model.import(items);
        // });
    }
}