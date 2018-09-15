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
const BaseRepository_1 = require("../infrastructure/database/BaseRepository");
const Product_1 = require("../model/areas/product/Product");
class ProductRepository extends BaseRepository_1.default {
    constructor() {
        super(Product_1.productSchema);
    }
    findByProductType(productType, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.find({ productType }, {}, {}, done);
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map