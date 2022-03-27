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
exports.data = exports.dataJson = void 0;
var constants_1 = require("./constants");
var helpers_1 = require("../helpers");
var fs_1 = __importDefault(require("fs"));
var data = {
    products: __spreadArray(__spreadArray([], constants_1.fruitNames.map(function (name) {
        return {
            productId: (0, helpers_1.uuid)(),
            type: 'fruit',
            name: name,
            description: 'Organic',
            price: 4.99,
            pictureUri: (0, helpers_1.getImageUri)(name)
        };
    }), true), constants_1.vegatableNames.map(function (name) {
        return {
            productId: (0, helpers_1.uuid)(),
            type: 'vegetable',
            name: name,
            description: 'Organic',
            price: 4.99,
            pictureUri: (0, helpers_1.getImageUri)(name)
        };
    }), true),
    categories: constants_1.categoryNames.map(function (name, idx) {
        return {
            categoryId: (0, helpers_1.uuid)(),
            name: name,
            color: constants_1.colors[idx],
            pictureUri: (0, helpers_1.getImageUri)(name)
        };
    })
};
exports.data = data;
var newProducts = JSON.parse(fs_1["default"].readFileSync('./newProducts.json', 'utf-8'));
newProducts.products.forEach(function (product) {
    data.products.unshift(product);
});
var dataJson = JSON.stringify(data);
exports.dataJson = dataJson;
fs_1["default"].writeFileSync('./data.json', dataJson);
//# sourceMappingURL=data.js.map