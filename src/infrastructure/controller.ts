import * as express from "express";

abstract class Controller {
    public router: express.Router;
    public authenticate: boolean;
}

export default Controller;