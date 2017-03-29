import { Component } from "@angular/core";
import {Router} from "@angular/router";
import { UserService } from "./userService";
@Component({
    templateUrl: "src/users.html"
})
export class Users {
    public users: Array<any>;
    public selectedUser: any;
    private userService: UserService;
    private router: Router;
    constructor(userService: UserService, router: Router) {
        let self = this;
        self.router = router;
        self.userService = userService;
        self.userService.getUsers().subscribe(
            (users: Array<any>) => {
                self.users = users;
            }
        );
    }
    public onUserClicked(user: any) {
        this.router.navigate(["/editUser", user.id]);
    }
}