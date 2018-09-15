import {controllerMap} from "./../controller";
import * as express from "express";
import * as passport from "passport";

module expressRoute {

    export const initialiseGlobalRoute = (): express.Router => {
        let router: express.Router = express.Router();
        controllerMap.forEach((controller: any) => {
            let a = new controller.default();
            if (a) {
                console.log("with auth");
                router.use(extractPathName(controller.default.name), passport.authenticate("jwt", {session: false}), a.router);
            }
        });
        return router;
    };

    const extractPathName = (n: string): string => {
        return "/" + n.replace("Controller", "");
    };

}

export = expressRoute;