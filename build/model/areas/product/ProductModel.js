"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = require("../../../repository/ProductRepository");
class ProductModel {
    static retrieveAllProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new ProductRepository_1.default();
            let product = {};
            yield repo.retrieve((err, res) => {
                if (err) {
                    product.err = err;
                }
                product.res = res;
            });
            return product;
        });
    }
    static filterByProductType(productType) {
        return __awaiter(this, void 0, void 0, function* () {
            let repo = new ProductRepository_1.default();
            let product = {};
            yield repo.findByProductType(productType, (err, res) => {
                if (err) {
                    product.err = err;
                }
                product.res = res;
            });
            return product;
        });
    }
}
exports.default = ProductModel;
//# sourceMappingURL=ProductModel.js.map