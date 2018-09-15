import { model, Schema, Document } from "mongoose";
import UserRepository from "../../../repository/UserRepository";

export interface User extends Document {
    userId: string;
    password: string;
    branch: string;
    role: string;
    contact: number;
    email: string;
    firstName: string;
    lastName: string;
    midName: string;
    dateCreated: Date;
    dateUpdated: Date;
    isActive: boolean;
}

let schema: Schema = new Schema({
    userId: String,
    password: String,
    branch: String,
    role: String,
    contact: Number,
    email: String,
    civilStatus: String,
    firstName: String,
    lastName: String,
    midName: String
});

export class UserModel {
    public static getAllUsers(): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            let repo = new UserRepository();
            repo.retrieve((err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    public static findUserById(userId: string): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            let repo = new UserRepository();
            repo.findByUserId(userId, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}

export let userSchema =  model<User>("user", schema, "users", true);