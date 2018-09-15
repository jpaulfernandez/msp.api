import * as express from "express";
import Controller from "../../../infrastructure/controller";
import { get } from "../../../infrastructure/route";

class LoanController extends Controller {

    constructor() {
        super();
    }

    @get("/")
    public async Index (req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({
            "txId" : "	00001",
            "txDate" : "01/01/1990",
            "client" : [{
                "psid" : "00001",
                "client" : {
                    "firstName" : "Paul",
                    "lastName" : "Fernandez",
                    "middleName" : "M",
                    "image" : "mime",
                    "address" : "Talavera",
                },
                "loan" : {
                    "id" : "0001",
                    "type" : "microfinance",
                    "remainingTerm" : "88",
                    "remainingBalance" : "10000",
                    "amortization" : "126",
                    "totalSaving" : "800",
                    "lastPaymentPosted" : "01/01/1990"
                }
            },
            {
                "psid" : "00002",
                "client" : {
                    "firstName" : "Paul2",
                    "lastName" : "Fernandez2",
                    "middleName" : "M",
                    "image" : "mime",
                    "address" : "Talavera",
                },
                "loan" : {
                    "id" : "0001",
                    "type" : "microfinance",
                    "remainingTerm" : "88",
                    "remainingBalance" : "10000",
                    "amortization" : "126",
                    "totalSaving" : "800",
                    "lastPaymentPosted" : "01/01/1990"
                }
            },
            {
                "psid" : "00003",
                "client" : {
                    "firstName" : "Paul3",
                    "lastName" : "Fernandez",
                    "middleName" : "M",
                    "image" : "mime",
                    "address" : "Talavera",
                },
                "loan" : {
                    "id" : "0001",
                    "type" : "microfinance",
                    "remainingTerm" : "88",
                    "remainingBalance" : "10000",
                    "amortization" : "126",
                    "totalSaving" : "800",
                    "lastPaymentPosted" : "01/01/1990"
                }
            },
            {
                "psid" : "00004",
                "client" : {
                    "firstName" : "Paul4",
                    "lastName" : "Fernandez",
                    "middleName" : "M",
                    "image" : "mime",
                    "address" : "Talavera",
                },
                "loan" : {
                    "id" : "0001",
                    "type" : "microfinance",
                    "remainingTerm" : "88",
                    "remainingBalance" : "10000",
                    "amortization" : "126",
                    "totalSaving" : "800",
                    "lastPaymentPosted" : "01/01/1990"
                }
            }]
        });

    }

}

export default LoanController;