import BaseRepository from "../infrastructure/database/BaseRepository";
import { Product, productSchema} from "../model/areas/product/Product";

class ProductRepository extends BaseRepository<Product> {
    constructor() {
        super(productSchema);
    }

    public async findByProductType (productType: string, done: (err: any, result: any) => void) {
        await this.find({productType}, {}, {}, done);
    }
}

export default ProductRepository;