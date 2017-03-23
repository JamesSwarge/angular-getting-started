import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./user/users";
import {CommonModule} from "../common/module";

let routes: Routes = [
    { path: "users", component: Users }
];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations:[Users],
    exports: [RouterModule]
})
export class SecurityModule { }