"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const globalRoute_1 = require("./infrastructure/globalRoute");
const authController_1 = require("./authentication/authController");
const passport = require("passport");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.route();
        this.connect();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(passport.initialize());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    route() {
        require("./authentication/passport");
        this.app.use("/public/v1", authController_1.authRouter);
        this.app.use("/public/v1", globalRoute_1.initialiseGlobalRoute());
    }
    connect() {
        let options = { server: { socketOptions: { keepAlive: 1 } } };
        return mongoose.connect(config.db, options);
    }
}
var server = Server.bootstrap();
module.exports = server.app;
//# sourceMappingURL=app.js.map