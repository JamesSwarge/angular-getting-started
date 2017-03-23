import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./user/users";
import {CommonModule} from "../common/module";
import {AddNewUser} from "./user/addNewUser";

let routes: Routes = [
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser }
];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations:[Users, AddNewUser],
    exports: [RouterModule]
})
export class SecurityModule { }