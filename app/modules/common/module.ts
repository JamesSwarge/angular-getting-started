import { NgModule } from "@angular/core";
import routeHelper from "./helpers/routeHelper";
import {Script} from "./directives/script";
import {Style} from "./directives/style";

export default routeHelper;
export * from "./models/appConfiguration";

@NgModule({
    declarations:[Script, Style],
    exports: [Script, Style]
})
export class CommonModule { }
