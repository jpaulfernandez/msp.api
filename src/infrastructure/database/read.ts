import * as mongoose from "mongoose";

export default interface Read<T> {
    retrieve: (done: (error: any, result: any) => void) => void;
    findById: (id: String, done: (error: any, result: any) => void) => void;
    findOne: (cond?: object, done?: (error: any, result: any) => void) => void;
    find: (cond: object, fields: object, options: object, done?: (error: any, result: any) => void) => void;
 }