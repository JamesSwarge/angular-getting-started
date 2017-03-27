import { Component } from "@angular/core";
@Component({
    templateUrl: "src/users.html"
})
export class Users {
    public users: Array<any> = [
        { firstName: "Tu", lastName: "Tran" }
    ];
    public selectedUser: any;

    public onUserClicked(user: any) {
        this.selectedUser = user;
    }
}