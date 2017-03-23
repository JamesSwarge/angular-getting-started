"use strict";
const defaultLayout_1 = require("../themes/default/defaultLayout");
const modules_1 = require("./modules");
const module_1 = require("../modules/common/module");
let layout = defaultLayout_1.DefaultLayout;
let appConfig = getAppConfig();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = appConfig;
function getAppConfig() {
    let appConfig = {
        layout: layout,
        routes: module_1.default.getModuleRoute(modules_1.default)
    };
    return appConfig;
}
//# sourceMappingURL=appConfig.js.map