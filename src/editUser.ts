import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./userService";
import {EditUserModel} from "./editUserModel";
@Component({
    templateUrl: "src/editUser.html"
})
export class EditUser {
    public model: EditUserModel = new EditUserModel();
    constructor(activatedRoute: ActivatedRoute, userService: UserService) {
        let self = this;
        self.model.id = activatedRoute.params["value"].id;
        userService.getUser(self.model.id).subscribe((user: any) => {
            self.model.import(user);
        });
    }
    public onSaveClicked() {
        console.log("Button clicked ne");
    }

    public onCancelClicked() {
        console.log("Cancel button clicked ne");
    }
}