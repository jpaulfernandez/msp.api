import { Schema, model, Document} from "mongoose";

export interface Logger extends Document {
    error: String;
    message: String;
    dateError: Date;
}

let schema: Schema =  new Schema({
	error: String,
    message: String,
    dateError: Date
});

export let loggerSchema = model<Logger>("errorLog", schema, "errorLogs", true);