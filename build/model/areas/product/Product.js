"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let _productSchema = new mongoose_1.Schema({
    productName: String,
    productDesc: String,
    productType: String,
    term: Number,
    savings: Number,
    serviceCharge: Number,
    interest: Number,
    documentary: Number,
    MRI: Number,
    other: Number,
    createdAt: Date,
    modifiedAt: Date,
    createdBy: String,
});
exports.productSchema = mongoose_1.model("product", _productSchema, "products", true);
//# sourceMappingURL=Product.js.map