"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express_1 = require("express");
var helpers_1 = require("../helpers");
// Express validator
var express_validator_1 = require("express-validator");
var router = (0, express_1.Router)();
// /api/order
router.post('/order', 
// Validators
[
    (0, express_validator_1.body)('productId').notEmpty(),
    (0, express_validator_1.body)('deliveryAddress').notEmpty(),
    (0, express_validator_1.body)('paymentMethod').notEmpty(),
], function (req, res) {
    try {
        var errors = (0, express_validator_1.validationResult)(req);
        // Check for errors and return bad response
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var order_1 = __assign(__assign({}, req.body), { orderId: (0, helpers_1.uuid)() });
        (0, helpers_1.makeOrder)(order_1, function (err) {
            if (err) {
                return res.status(401).send({ message: err });
            }
            else {
                return res
                    .status(200)
                    .send({ message: 'Order created successfully', order: order_1 });
            }
        });
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
});
// /api/order/:id
router.get('/order/:id', function (req, res) {
    try {
        var id = req.params.id;
        var order = (0, helpers_1.getOrder)(id);
        res.status(200).json({ order: order });
    }
    catch (err) {
        res.status(401).json({ error: err.message });
    }
});
exports["default"] = router;
//# sourceMappingURL=Orders.route.js.map