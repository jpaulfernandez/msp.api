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
const LedgerRepository_1 = require("../../../repository/LedgerRepository");
class ClientModel {
    static getLedger(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new LedgerRepository_1.default();
            let ledger = {};
            yield repo.getLedgerByOwner(owner, (err, res) => {
                if (err) {
                    ledger.err = err;
                }
                ledger.res = res;
            });
            return ledger;
        });
    }
    static getLedgerById(ledgerId) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new LedgerRepository_1.default();
            let ledger = {};
            yield repo.getLedgerById(ledgerId, (err, res) => {
                if (err) {
                    ledger.err = err;
                }
                ledger.res = res;
            });
            return ledger;
        });
    }
    static getOverdue() {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new LedgerRepository_1.default();
            let ledger = {};
            yield repo.GetOverdue((err, res) => {
                console.log(err);
                console.log(res);
                if (err) {
                    ledger.err = err;
                }
                ledger.res = res;
            });
            return ledger;
        });
    }
}
exports.default = ClientModel;
//# sourceMappingURL=LedgerModel.js.map