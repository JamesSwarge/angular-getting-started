import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultPage } from "../../defaultPage";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
let routes: Routes = [
    { path: "", redirectTo:"users", pathMatch:"full" },
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser },
    { path: "editUser/:userId", component: EditUser }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteConfig { }