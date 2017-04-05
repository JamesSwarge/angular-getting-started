import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { DefaultPage } from "../../defaultPage";
import { Users } from "./user/users";
import { AddNewUser } from "./user/addNewUser";
import { EditUser } from "./user/editUser";
let routes: any = getRoute();
export default routes;

let routeConfigs: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser },
    { path: routes.user.editUser.path, component: EditUser }
];
@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: [RouterModule]
})
export class SecurityRoute { }


function getRoute() {
    let route: any = {
        user: {
            editUser: {
                name: "security.user.editUser",
                path: "editUser/:userId"
            }
        }
    };
    return route;
}