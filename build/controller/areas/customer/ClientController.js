"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../../../infrastructure/controller");
const route_1 = require("../../../infrastructure/route");
const ClientModel_1 = require("../../../model/areas/client/ClientModel");
const LedgerModel_1 = require("../../../model/areas/client/LedgerModel");
class ClientController extends controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield ClientModel_1.default.retrieveAllClient();
            res.json(client.res);
        });
    }
    getClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let filterObject = {};
            filterObject[req.params.q] = req.params.value;
            let client = yield ClientModel_1.default.filter(filterObject);
            res.json(client.res);
        });
    }
    getAllLedger(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let owner = req.params.owner;
            let ledger = yield LedgerModel_1.default.getLedger(owner);
            res.json(ledger.res);
        });
    }
    getLedgerById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let ledger = yield LedgerModel_1.default.getLedgerById(id);
            res.json(ledger.res);
        });
    }
    getOverdueClients(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let ledger = yield LedgerModel_1.default.getOverdue();
            res.json(ledger.res);
        });
    }
}
__decorate([
    route_1.get("/")
], ClientController.prototype, "Index", null);
__decorate([
    route_1.get("/:q/:value")
], ClientController.prototype, "getClient", null);
__decorate([
    route_1.get("/ledger/owner/:owner")
], ClientController.prototype, "getAllLedger", null);
__decorate([
    route_1.get("/ledger/id/:id")
], ClientController.prototype, "getLedgerById", null);
__decorate([
    route_1.get("/overdue")
], ClientController.prototype, "getOverdueClients", null);
exports.default = ClientController;
//# sourceMappingURL=ClientController.js.map