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
var data_1 = require("../data");
// Express validator
var express_validator_1 = require("express-validator");
var helpers_1 = require("../helpers");
var router = (0, express_1.Router)();
// @typescript-eslint-disable-file
// /api/products 
router.get('/products', function (req, res) {
    try {
        res.status(200).json(data_1.data.products);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// /api/products/:type
router.get('/products/:type', function (req, res) {
    var _a;
    try {
        var type_1 = req.params.type;
        res.status(200).json((_a = {},
            _a[type_1] = data_1.data.products.filter(function (product) { return product.type === type_1; }),
            _a));
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// /api/products/:id
router.get('/products/:id', function (req, res) {
    var id = req.params.id;
    res.send(data_1.data.products.find(function (p) { return p.productId === id; }));
});
// /api/product
router.post('/product', [
    (0, express_validator_1.body)('type').custom(function (val, _a) {
        var req = _a.req;
        if (val === 'fruit' || val === 'vegetable') {
            return val;
        }
        else {
            throw new Error('Type of product should be fruit or vegetable');
        }
    }),
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('description').notEmpty(),
    (0, express_validator_1.body)('price').isNumeric(),
], function (req, res) {
    try {
        var errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                errors: errors
            });
        }
        var product_1 = __assign(__assign({}, req.body), { pictureUri: (0, helpers_1.getImageUri)(req.body.name), productId: (0, helpers_1.uuid)() });
        (0, helpers_1.makeProduct)(product_1, function (err) {
            if (!err) {
                return res.status(200).json({ product: product_1, message: "Product created successfully" });
            }
            else {
                return res.status(401).json({ error: err });
            }
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports["default"] = router;
//# sourceMappingURL=Products.route.js.map