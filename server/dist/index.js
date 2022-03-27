"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = require("body-parser");
// Routers
var Products_route_1 = __importDefault(require("./routes/Products.route"));
var Categories_route_1 = __importDefault(require("./routes/Categories.route"));
var Orders_route_1 = __importDefault(require("./routes/Orders.route"));
dotenv_1["default"].config();
var PORT = process.env.PORT;
var app = (0, express_1["default"])();
app.use((0, body_parser_1.json)());
app.use((0, cors_1["default"])());
/*
 * Routes
 */
app.use('/api/', Products_route_1["default"]);
app.use('/api/', Categories_route_1["default"]);
app.use('/api/', Orders_route_1["default"]);
app.get('/api/', function (req, res) {
    res.send("Server is up and running");
});
app.listen(PORT, function () {
    console.log("App listening on http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map