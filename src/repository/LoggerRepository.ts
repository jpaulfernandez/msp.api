import { loggerSchema } from "../model/helper/logger/logger";
import * as mongoose from "mongoose";

class LogerRepository {
    private _model: mongoose.Model<mongoose.Document> = loggerSchema;
    constructor() {
        this._model = loggerSchema;
    }

    public static async WriteLog (err: string, message: string, dateError: Date, done: (err: any, res: any) => void) {
        await loggerSchema.create({err, message, dateError}, done);
    }


}