"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getOrder = void 0;
var fs_1 = __importDefault(require("fs"));
var getOrder = function (id) {
    var orders = JSON.parse(fs_1["default"].readFileSync('./orders.json', { encoding: 'utf8' })).orders;
    return orders.find(function (o) { return o.orderId === id; });
};
exports.getOrder = getOrder;
//# sourceMappingURL=getOrder.js.map