import { Schema, model, Document} from "mongoose";

interface Spouse {
    firstName: string;
    midName: string;
    lastName: string;
}

interface Business {
    businessName: string;
    businessIndustry: string;
    businessAddress: string;
    city: string;
    province: string;
}

export interface Client extends Document {
    clientId: string;
    firstName: string;
    lastName: string;
    middleName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    province: string;
    birthday: Date;
    civilStatus: string;
    spouse: Spouse;
    business: Business;
    documents: Array<String>;
    signature: String;
    notes: String;
    verified: Boolean;
    status: String;
    profilePicture: String;
}

let schema: Schema =  new Schema({
	clientId: String,
    firstName: String,
    lastName: String,
    middleName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    province: String,
    birthday: Date,
    civilStatus: String,
    spouse: Object,
    business: Object,
    documents: [String],
    signature: String,
    notes: String,
    verified: Boolean,
    status: String,
    profilePicture: String
});

export let clientSchema = model<Client>("client", schema, "clients", true);