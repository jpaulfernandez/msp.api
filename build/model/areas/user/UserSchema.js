"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    userId: String,
    password: String,
    branch: String,
    role: String,
    contact: Number,
    email: String,
    civilStatus: String,
    firstName: String,
    lastName: String,
    midName: String
});
exports.userSchema = mongoose_1.model("user", schema, "users", true);
//# sourceMappingURL=UserSchema.js.map