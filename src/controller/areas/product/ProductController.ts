import * as express from "express";
import Controller from "../../../infrastructure/controller";
import { get } from "../../../infrastructure/route";
import ProductModel from "../../../model/areas/product/ProductModel";

class ProductController extends Controller {

    constructor() {
        super();
    }

    @get("/")
    public async Index (req: express.Request, res: express.Response, next: express.NextFunction) {
        let products = await ProductModel.retrieveAllProduct();
        res.json(products.res);
    }

    @get("/:productType")
    public async getproduct (req: express.Request, res: express.Response, next: express.NextFunction) {
        let productType = req.params.productType;
        let products = await ProductModel.filterByProductType(productType);
        res.json(products.res);
    }



}

export default ProductController;