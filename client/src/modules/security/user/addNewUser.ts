import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../../modules/security/_share/services/userService";
import { AddNewUserModel } from "./addNewUserModel";
import { BasePage } from "../../../modules/common/index";
@Component({
    templateUrl: "src/modules/security/user/addNewUser.html",
})
export class AddNewUser extends BasePage<AddNewUserModel> {
    private userService: UserService;
    constructor(router: Router, userService: UserService) {
        super(router);
        this.model = new AddNewUserModel();
        this.userService = userService;
    }
    protected onReady() {
        console.log("onReady");
    }
    public onCancelClicked(event: any) {
        this.navigate("/users");
    }
    public onSaveClicked() {
        let self = this;
        this.userService.createUser(this.model)
            .then(function () {
                self.navigate("/users");
            });
    }
}