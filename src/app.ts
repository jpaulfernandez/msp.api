/// <reference path="_all.d.ts" />

"use strict";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import * as config from "./config";
import { initialiseGlobalRoute } from "./infrastructure/globalRoute";
import { authRouter } from "./authentication/authController";
import * as passport from "passport";
/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();
    this.route();
    this.connect();
  }

  /**
   *
   * @class Server
   * @method config
   * @private
   * @return void
   */
  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(passport.initialize());
    this.app.use(function(req: any, res: any, next: any) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  }

  private route() {
    require("./authentication/passport");
    this.app.use("/public/v1", authRouter);
    this.app.use("/public/v1", initialiseGlobalRoute());
  }

  private connect() {
    let options = { server: {socketOptions: { keepAlive: 1} }};
    return mongoose.connect(config.db, options);
  }
}

var server = Server.bootstrap();
export = server.app;