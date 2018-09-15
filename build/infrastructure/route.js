"use strict";
const express = require("express");
var RouteDecorator;
(function (RouteDecorator) {
    let expressRoute;
    RouteDecorator.get = (path) => {
        return (target, property, descriptor) => {
            let targetRouter = target.router;
            if (!targetRouter) {
                targetRouter = express.Router();
            }
            targetRouter.get(path, target[property]);
            target.router = targetRouter;
        };
    };
    RouteDecorator.post = (path) => {
        return (target, property, descriptor) => {
            let targetRouter = target.router;
            if (!targetRouter) {
                targetRouter = express.Router();
            }
            targetRouter.post(path, target[property]);
            target.router = targetRouter;
        };
    };
    RouteDecorator.authenticate = () => {
        return (target, property, descriptor) => {
            target.authenticate = true;
        };
    };
})(RouteDecorator || (RouteDecorator = {}));
module.exports = RouteDecorator;
//# sourceMappingURL=route.js.map