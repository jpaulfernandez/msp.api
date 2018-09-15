import * as express from "express";
import Controller from "../../../infrastructure/controller";
import { get } from "../../../infrastructure/route";
import ClientModel from "../../../model/areas/client/ClientModel";
import LedgerModel from "../../../model/areas/client/LedgerModel";

class ClientController extends Controller {

    constructor() {
        super();
    }

    @get("/")
    public async Index (req: express.Request, res: express.Response, next: express.NextFunction) {
       let client = await ClientModel.retrieveAllClient();
       res.json(client.res);

    }

    @get("/:q/:value")
    public async getClient (req: express.Request, res: express.Response, next: express.NextFunction) {
        let filterObject: any = {};
        filterObject[req.params.q] = req.params.value;
        let client = await ClientModel.filter(filterObject);
        res.json(client.res);
    }

    @get("/ledger/owner/:owner")
    public async getAllLedger (req: express.Request, res: express.Response, next: express.NextFunction) {
        let owner = req.params.owner;
        let ledger = await LedgerModel.getLedger(owner);
        res.json(ledger.res);
    }

    @get("/ledger/id/:id")
    public async getLedgerById (req: express.Request, res: express.Response, next: express.NextFunction) {
        let id = req.params.id;
        let ledger = await LedgerModel.getLedgerById(id);
        res.json(ledger.res);
    }

    @get("/overdue")
    public async getOverdueClients (req: express.Request, res: express.Response, next: express.NextFunction) {
        let ledger = await LedgerModel.getOverdue();
        res.json(ledger.res);
    }

}

export default ClientController;