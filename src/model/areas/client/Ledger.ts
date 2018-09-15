import { Schema, model, Document} from "mongoose";

interface Amortization {
    principal: Number;
    interest: Number;
    savings: Number;
}

interface LedgerRecord {
    datePaid: Date;
    prNo: String;
    payment: Number;
    savings: Number;
    interest: Number;
    principal: Number;
    balance: Number;
    remainingSavings: Number;
    remainingInterest: Number;
}

export interface Ledger extends Document {
    ledgerId: String;
    owner: String;
    loanType: String;
    loanAmmount: Number;
    dateGranted: Date;
    dueDate: Date;
    term: Number;
    status: String;
    amortization: Amortization;
    transactions: Array<LedgerRecord>;
}

let schema: Schema =  new Schema({
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

export let ledgerSchema = model<Ledger>("ledger", schema, "ledgers", true);