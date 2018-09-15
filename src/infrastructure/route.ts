import controller from "./controller";
import * as express from "express";

module RouteDecorator {

    let expressRoute: express.Router;

    /**
     *
     * @param path
     * @method
     */
    export const get = (path: string): Function => {

        return (target: any, property: string, descriptor: TypedPropertyDescriptor<Function>) => {
            let targetRouter: express.Router = target.router;
            if (!targetRouter) {
                targetRouter = express.Router();
            }
            targetRouter.get(path, target[property]);
            target.router = targetRouter;
        };
    };

    export const post = (path: string): Function => {

        return (target: any, property: string, descriptor: TypedPropertyDescriptor<Function>) => {
            let targetRouter: express.Router = target.router;
            if (!targetRouter) {
                targetRouter = express.Router();
            }
            targetRouter.post(path, target[property]);
            target.router = targetRouter;
        };
    };

    export const authenticate = (): Function => {

        return (target: any, property: string, descriptor: TypedPropertyDescriptor<Function>) => {
            target.authenticate = true;
        };
    };
}

export = RouteDecorator;

