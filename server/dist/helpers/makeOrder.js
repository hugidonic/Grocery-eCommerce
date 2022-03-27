"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.makeOrder = void 0;
var fs_1 = __importDefault(require("fs"));
/**
 * This function adds the new order to the `orders.json` file
 * @param order new order obj
 * @param callback callback which has err message
 */
var makeOrder = function (newOrder, callback) {
    if (callback === void 0) { callback = function (err) { }; }
    var previousOrders = JSON.parse(fs_1["default"].readFileSync('./orders.json', { encoding: 'utf8' }));
    var newOrders = {
        orders: __spreadArray(__spreadArray([], previousOrders.orders, true), [newOrder], false)
    };
    var json = JSON.stringify(newOrders);
    fs_1["default"].writeFile('./orders.json', json, function (err) { return callback(err); });
};
exports.makeOrder = makeOrder;
//# sourceMappingURL=makeOrder.js.map