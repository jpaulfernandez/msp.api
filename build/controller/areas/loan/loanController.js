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
class LoanController extends controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({
                "txId": "	00001",
                "txDate": "01/01/1990",
                "client": [{
                        "psid": "00001",
                        "client": {
                            "firstName": "Paul",
                            "lastName": "Fernandez",
                            "middleName": "M",
                            "image": "mime",
                            "address": "Talavera",
                        },
                        "loan": {
                            "id": "0001",
                            "type": "microfinance",
                            "remainingTerm": "88",
                            "remainingBalance": "10000",
                            "amortization": "126",
                            "totalSaving": "800",
                            "lastPaymentPosted": "01/01/1990"
                        }
                    },
                    {
                        "psid": "00002",
                        "client": {
                            "firstName": "Paul2",
                            "lastName": "Fernandez2",
                            "middleName": "M",
                            "image": "mime",
                            "address": "Talavera",
                        },
                        "loan": {
                            "id": "0001",
                            "type": "microfinance",
                            "remainingTerm": "88",
                            "remainingBalance": "10000",
                            "amortization": "126",
                            "totalSaving": "800",
                            "lastPaymentPosted": "01/01/1990"
                        }
                    },
                    {
                        "psid": "00003",
                        "client": {
                            "firstName": "Paul3",
                            "lastName": "Fernandez",
                            "middleName": "M",
                            "image": "mime",
                            "address": "Talavera",
                        },
                        "loan": {
                            "id": "0001",
                            "type": "microfinance",
                            "remainingTerm": "88",
                            "remainingBalance": "10000",
                            "amortization": "126",
                            "totalSaving": "800",
                            "lastPaymentPosted": "01/01/1990"
                        }
                    },
                    {
                        "psid": "00004",
                        "client": {
                            "firstName": "Paul4",
                            "lastName": "Fernandez",
                            "middleName": "M",
                            "image": "mime",
                            "address": "Talavera",
                        },
                        "loan": {
                            "id": "0001",
                            "type": "microfinance",
                            "remainingTerm": "88",
                            "remainingBalance": "10000",
                            "amortization": "126",
                            "totalSaving": "800",
                            "lastPaymentPosted": "01/01/1990"
                        }
                    }]
            });
        });
    }
}
__decorate([
    route_1.get("/")
], LoanController.prototype, "Index", null);
exports.default = LoanController;
//# sourceMappingURL=loanController.js.map