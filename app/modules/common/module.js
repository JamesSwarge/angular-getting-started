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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const core_1 = require("@angular/core");
const routeHelper_1 = require("./helpers/routeHelper");
const script_1 = require("./directives/script");
const style_1 = require("./directives/style");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    core_1.NgModule({
        declarations: [script_1.Script, style_1.Style],
        exports: [script_1.Script, style_1.Style]
    }), 
    __metadata('design:paramtypes', [])
], CommonModule);
exports.CommonModule = CommonModule;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeHelper_1.default;
__export(require("./models/appConfiguration"));
//# sourceMappingURL=module.js.map