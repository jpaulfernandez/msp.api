"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    error: String,
    message: String,
    dateError: Date
});
exports.loggerSchema = mongoose_1.model("errorLog", schema, "errorLogs", true);
//# sourceMappingURL=logger.js.map