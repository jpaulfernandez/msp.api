import * as mongoose from "mongoose";
import Read from "./read";

abstract class BaseRepository<T extends mongoose.Document> implements Read<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schema: mongoose.Model<mongoose.Document>) {
        this._model = schema;
    }

    public async retrieve(done: (error: any, result: any) => void) {
        await this._model.find({}, done);
    }

    public async findById(_id: string, done: (error: any, result: any) => void) {
        await this._model.findById(_id, done);
    }

    public async findOne(cond?: object, done?: (error: any, result: any) => void) {
        await this._model.findOne(cond, done);
    }

    public async find(cond?: object, field?: object, options?: object, done?: (error: any, result: any) => void) {
        await this._model.find(cond, options, done);
    }

}

export default BaseRepository;