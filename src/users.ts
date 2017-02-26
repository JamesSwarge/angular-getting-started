import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./userService";
@Component({
    templateUrl: "src/users.html",
    providers: [UserService]
})
export class Users {
    private router: Router;
    public selectedUser: any = {};
    public users: Array<any> = [];
    constructor(router: Router, userService: UserService) {
        this.router = router;
        let self = this;
        userService.getUsers().then(function (users: Array<any>) {
            self.users = users;
        })
            .error((error: any) => console.log(error));
    }
    public onEditUserClicked(userId: string) {
        this.router.navigate(["/editUser", userId]);
    }
    public onSummaryClicked(user: any) {
        this.selectedUser = user;
    }
    public onFirstNameChanged(newname: string) {
        console.log(newname);
        this.selectedUser.firstName = newname;
    }
}