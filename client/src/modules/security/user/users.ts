import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IUserService } from "../../../modules/security/_share/services/iuserService";
import { BasePage } from "../../../modules/common/index";
import { IoCNames } from "../../../modules/common/index";

@Component({
    templateUrl: "src/modules/security/user/users.html"
})
export class Users extends BasePage {
    public selectedUser: any = {};
    public users: Array<any> = [];
    constructor(router: Router) {
        super(router);
        let self = this;
        let userService: IUserService = window.ioc.resolve(IoCNames.IUserService);
        userService.getUsers().then(function (users: Array<any>) {
            self.users = users;
        });
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