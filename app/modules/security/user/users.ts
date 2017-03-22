import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl: "src/users.html"
})
export class Users {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    public onEditUserClicked(userId: string) {
        this.router.navigate(["/editUser", userId]);
    }
}