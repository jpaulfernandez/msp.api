"use strict";
const ProductController = require("./areas/product/ProductController");
const UserController = require("./areas/user/UserController");
const ClientController = require("./areas/customer/ClientController");
const LoanController = require("./areas/loan");
const DispatchController = require("./areas/dispatch");
var controllerList;
(function (controllerList) {
    controllerList.controllerMap = [
        ProductController,
        UserController,
        ClientController,
        LoanController,
        DispatchController
    ];
})(controllerList || (controllerList = {}));
module.exports = controllerList;
//# sourceMappingURL=index.js.map