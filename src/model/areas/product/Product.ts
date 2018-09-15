import { Schema, model, Document} from "mongoose";

export interface Product extends Document {
	productName: string;
	productDesc: string;
	productType: string;
	term: number;
	savings: number;
	serviceCharge: number;
	interest: number;
	documentary: number;
	MRI: number;
	other: number;
	createdAt: Date;
	modifiedAt: Date;
	createdBy: string;
}

let _productSchema: Schema =  new Schema({
	productName: String,
	productDesc: String,
	productType: String,
	term: Number,
	savings: Number,
	serviceCharge: Number,
	interest: Number,
	documentary: Number,
	MRI: Number,
	other: Number,
	createdAt: Date,
	modifiedAt: Date,
	createdBy: String,
});

export let productSchema = model<Product>("product", _productSchema, "products", true);