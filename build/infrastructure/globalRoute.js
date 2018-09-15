"use strict";
const controller_1 = require("./../controller");
const express = require("express");
const passport = require("passport");
var expressRoute;
(function (expressRoute) {
    expressRoute.initialiseGlobalRoute = () => {
        let router = express.Router();
        controller_1.controllerMap.forEach((controller) => {
            let a = new controller.default();
            if (a) {
                console.log("with auth");
                router.use(extractPathName(controller.default.name), passport.authenticate("jwt", { session: false }), a.router);
            }
        });
        return router;
    };
    const extractPathName = (n) => {
        return "/" + n.replace("Controller", "");
    };
})(expressRoute || (expressRoute = {}));
module.exports = expressRoute;
//# sourceMappingURL=globalRoute.js.map