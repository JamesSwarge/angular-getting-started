"use strict";
let domHelper = {
    createScript: createScript,
    createStyle: createStyle
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = domHelper;
function createStyle(src, callback = null) {
    var style = document.createElement('link');
    style.onload = function () {
        console.log(src);
        if (callback) {
            callback();
        }
    };
    style.href = src;
    style.rel = "stylesheet";
    document.getElementsByTagName('head')[0].appendChild(style);
}
function createScript(src, callback = null) {
    var script = document.createElement('script');
    script.onload = function () {
        console.log(src);
        if (callback) {
            callback();
        }
    };
    script.src = src;
    script.async = false;
    document.getElementsByTagName('head')[0].appendChild(script);
}
//# sourceMappingURL=domHelper.js.map