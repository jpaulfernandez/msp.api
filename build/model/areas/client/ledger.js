"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    ledgerId: String,
    owner: String,
    loanType: String,
    loanAmmount: Number,
    dateGranted: Date,
    dueDate: Date,
    term: Number,
    status: String,
    amortization: Object,
    transactions: [Object],
});
exports.ledgerSchema = mongoose_1.model("ledger", schema, "ledgers", true);
//# sourceMappingURL=Ledger.js.map