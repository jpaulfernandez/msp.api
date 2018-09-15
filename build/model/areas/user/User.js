"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserRepository_1 = require("../../../repository/UserRepository");
let schema = new mongoose_1.Schema({
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
class UserModel {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            let repo = new UserRepository_1.default();
            repo.retrieve((err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    static findUserById(userId) {
        return new Promise((resolve, reject) => {
            let repo = new UserRepository_1.default();
            repo.findByUserId(userId, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}
exports.UserModel = UserModel;
exports.userSchema = mongoose_1.model("user", schema, "users", true);
//# sourceMappingURL=User.js.map