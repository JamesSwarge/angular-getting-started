import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./userService";
import { AddNewUserModel } from "./addNewUserModel";
import { BasePage } from "./basePage";
@Component({
    templateUrl: "src/addNewUser.html",
})
export class AddNewUser extends BasePage {
    private userService: UserService;
    public model: AddNewUserModel = new AddNewUserModel();
    constructor(router: Router, userService: UserService) {
        super(router);
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