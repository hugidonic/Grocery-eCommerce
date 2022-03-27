"use strict";
exports.__esModule = true;
var express_1 = require("express");
var data_1 = require("../data");
var router = (0, express_1.Router)();
// /api/categories
router.get('/categories', function (req, res) {
    try {
        res.status(200).json(data_1.data.categories);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// /api/categories
router.get('/categories/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        res.status(200).json(data_1.data.categories.find(function (c) { return c.categoryId === id_1; }));
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports["default"] = router;
//# sourceMappingURL=Categories.route.js.map