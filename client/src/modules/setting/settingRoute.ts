import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentTypes } from "./contentType/contentTypes";
let routes: Routes = [
    { path: "", redirectTo: "contentTypes", pathMatch: "full" },
    { path: "contentTypes", component: ContentTypes }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})
export class SettingRoute { }