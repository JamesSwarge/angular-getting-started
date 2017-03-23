"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const appConfig_1 = require("./config/appConfig");
const module_1 = require("./modules/common/module");
let Application = class Application {
};
Application = __decorate([
    core_1.NgModule({
        imports: [
            module_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(appConfig_1.default.routes)
        ],
        declarations: [appConfig_1.default.layout],
        bootstrap: [appConfig_1.default.layout]
    }), 
    __metadata('design:paramtypes', [])
], Application);
exports.Application = Application;
//# sourceMappingURL=application.js.map