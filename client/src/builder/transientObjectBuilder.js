"use strict";
class TransientObjectBuilder {
    constructor(obj) {
        this.obj = obj;
    }
    build() {
        return new this.obj.instance();
    }
}
exports.TransientObjectBuilder = TransientObjectBuilder;
//# sourceMappingURL=transientObjectBuilder.js.map