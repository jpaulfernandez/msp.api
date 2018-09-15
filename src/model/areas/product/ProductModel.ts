import ProductRepository from "../../../repository/ProductRepository";

export default class ProductModel {
	public static async retrieveAllProduct() {
		let repo = new ProductRepository();
		let product: any = {};
		await repo.retrieve((err, res) => {
			if (err) {
				product.err = err;
			}
			product.res = res;
		});
		return product;
	}

	public static async filterByProductType(productType: string) {
		let repo = new ProductRepository();
		let product: any = {};
		await repo.findByProductType(productType, (err, res) => {
			if (err) {
				product.err = err;
			}
			product.res = res;
		});
		return product;
	}
}