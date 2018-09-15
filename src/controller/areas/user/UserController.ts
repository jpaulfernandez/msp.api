import * as express from "express";
import Controller from "../../../infrastructure/controller";
import { UserModel } from "../../../model/areas/user/User";
import { get } from "../../../infrastructure/route";

class UserController extends Controller {

    constructor() {
        super();
    }

    @get("/")
    public Index (req: express.Request, res: express.Response, next: express.NextFunction) {
        UserModel.getAllUsers().then(resolve => {
            res.json(resolve);
        }, reject => {
            res.json({message: "error retrieving users"});
        });
    }

}

export default UserController;