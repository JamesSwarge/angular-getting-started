import { NgModule } from "@angular/core";
import routeHelper from "./helpers/routeHelper";
import {Script} from "./directives/script";
import {Style} from "./directives/style";
@NgModule({
    declarations:[Script, Style],
    exports: [Script, Style]
})
export class CommonModule { }

export default routeHelper;
export * from "./models/appConfiguration";