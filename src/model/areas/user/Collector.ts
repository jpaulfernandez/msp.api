import { Schema, model, Document} from "mongoose";

export interface Collector extends Document {
    productName: "";
}

let schema: Schema =  new Schema({
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

export let collectorSchema = model<Collector>("collector", schema, "collectors", true);