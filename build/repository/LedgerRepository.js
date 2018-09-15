"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../infrastructure/database/BaseRepository");
const Ledger_1 = require("../model/areas/client/Ledger");
class LedgerRepository extends BaseRepository_1.default {
    constructor() {
        super(Ledger_1.ledgerSchema);
    }
    getLedgerById(ledgerId, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.find({ ledgerId }, {}, {}, done);
        });
    }
    getLedgerByOwner(owner, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.find({ owner }, {}, {}, done);
        });
    }
    GetOverdue(done) {
        return __awaiter(this, void 0, void 0, function* () {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let newDate = new Date("2018-08-28T16:00:00.000Z");
            console.log(newDate);
            let dateToday = `${day}/${month}/${year}`;
            this.find({ dueDate: newDate }, {}, {}, done);
        });
    }
}
exports.default = LedgerRepository;
//# sourceMappingURL=LedgerRepository.js.map