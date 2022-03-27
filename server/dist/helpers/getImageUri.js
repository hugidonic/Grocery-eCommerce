"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getImageUri = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var getImageUri = function (name) {
    return "".concat(process.env.IMAGESURI, "/").concat(name, ".png");
};
exports.getImageUri = getImageUri;
//# sourceMappingURL=getImageUri.js.map