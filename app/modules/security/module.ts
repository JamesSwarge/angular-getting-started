import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./user/users";


let routes: Routes = [
    { path: "users", component: Users }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations:[Users],
    exports: [RouterModule]
})
export class SecurityModule { }