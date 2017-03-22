import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultPage } from "./defaultPage";
import { Users } from "./users";
import { AddNewUser } from "./addNewUser";
import { EditUser } from "./editUser";
let routes: Routes = [
    { path: "", component: DefaultPage },
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser },
    { path: "editUser/:userId", component: EditUser }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouteConfig { }