import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./userService";
import {BasePage} from "./basePage";
@Component({
    templateUrl: "src/users.html",
    providers: [UserService]
})
export class Users extends BasePage {
    public selectedUser: any = {};
    public users: Array<any> = [];
    constructor(router: Router) {
        super(router);
        let self = this;
        let userService = window.ioc.resolve("userService");
        userService.getUsers().then(function (users: Array<any>) {
            self.users = users;
        })
            .error((error: any) => console.log(error));
    }
    public onEditUserClicked(userId: string) {
        this.navigate("/editUser", userId);
    }
    public onSummaryClicked(user: any) {
        this.selectedUser = user;
    }
    public onFirstNameChanged(newname: string) {
        console.log(newname);
        this.selectedUser.firstName = newname;
    }
}