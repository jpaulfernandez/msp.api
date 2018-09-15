"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    clientId: String,
    firstName: String,
    lastName: String,
    middleName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    province: String,
    birthday: Date,
    civilStatus: String,
    spouse: Object,
    business: Object,
    documents: [String],
    signature: String,
    notes: String,
    verified: Boolean,
    status: String,
    profilePicture: String
});
exports.clientSchema = mongoose_1.model("client", schema, "clients", true);
//# sourceMappingURL=Client.js.map