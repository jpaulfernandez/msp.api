import * as ProductController from "./areas/product/ProductController";
import * as UserController from "./areas/user/UserController";
import * as ClientController from "./areas/customer/ClientController";
import * as LoanController from "./areas/loan";
import * as DispatchController from "./areas/dispatch";

module controllerList {
    export const controllerMap = [
        ProductController,
        UserController,
        ClientController,
        LoanController,
        DispatchController
    ];
}
export = controllerList;