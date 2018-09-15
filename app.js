"use strict";
const express = require("express");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        console.log("config");
    }
}
var server = Server.bootstrap();
module.exports = server.app;
