"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../infrastructure/database/BaseRepository");
const User_1 = require("../model/areas/user/User");
class UserRepository extends BaseRepository_1.default {
    constructor() {
        super(User_1.userSchema);
    }
    findByUserId(userId, done) {
        this.findOne({ userId }, done);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map