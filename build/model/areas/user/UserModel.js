"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../../../repository/UserRepository");
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
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map