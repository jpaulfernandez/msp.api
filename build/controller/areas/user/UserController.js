"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../../../infrastructure/controller");
const User_1 = require("../../../model/areas/user/User");
const route_1 = require("../../../infrastructure/route");
class UserController extends controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        User_1.UserModel.getAllUsers().then(resolve => {
            res.json(resolve);
        }, reject => {
            res.json({ message: "error retrieving users" });
        });
    }
}
__decorate([
    route_1.get("/")
], UserController.prototype, "Index", null);
exports.default = UserController;
//# sourceMappingURL=UserController.js.map