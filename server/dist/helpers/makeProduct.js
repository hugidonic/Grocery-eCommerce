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
exports.makeProduct = void 0;
var fs_1 = __importDefault(require("fs"));
var makeProduct = function (newProduct, callback) {
    var previousProducts = JSON.parse(fs_1["default"].readFileSync('./newProducts.json', 'utf8'));
    var newProducts = {
        products: __spreadArray(__spreadArray([], previousProducts.products, true), [newProduct], false)
    };
    fs_1["default"].writeFile('./newProducts.json', JSON.stringify(newProducts), function (err) {
        return callback(err);
    });
};
exports.makeProduct = makeProduct;
//# sourceMappingURL=makeProduct.js.map