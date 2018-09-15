"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    productName: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    term: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    },
    serviceCharge: {
        type: Number,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    documentary: {
        type: Number,
        required: true
    },
    MRI: {
        type: Number,
        required: true
    },
    other: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    },
    createdBy: {
        type: String,
        required: false
    }
});
exports.productSchema = mongoose_1.model("product", schema, "products", true);
//# sourceMappingURL=ProductSchema.js.map