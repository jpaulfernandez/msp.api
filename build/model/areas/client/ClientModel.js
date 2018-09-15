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
const ClientRepository_1 = require("../../../repository/ClientRepository");
class ClientModel {
    static retrieveAllClient() {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new ClientRepository_1.default();
            let clients = {};
            yield repo.retrieve((err, res) => {
                if (err) {
                    clients.err = err;
                }
                clients.res = res;
            });
            return clients;
        });
    }
    static filter(cond) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new ClientRepository_1.default();
            let clients = {};
            yield repo.find(cond, {}, {}, (err, res) => {
                if (err) {
                    clients.err = err;
                }
                clients.res = res;
            });
            return clients;
        });
    }
}
exports.default = ClientModel;
//# sourceMappingURL=ClientModel.js.map