import * as express from "express";
import Controller from "../../../infrastructure/controller";
import { post } from "../../../infrastructure/route";

export default class Dispatch extends Controller {

    constructor() {
        super();
    }

    @post("/")
    public async Dispatch(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.body);
        res.json({
            status: "command accepted"
        });
    }
}