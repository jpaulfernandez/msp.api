"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../infrastructure/database/BaseRepository");
const Client_1 = require("../model/areas/client/Client");
class ClientRepository extends BaseRepository_1.default {
    constructor() {
        super(Client_1.clientSchema);
    }
}
exports.default = ClientRepository;
//# sourceMappingURL=ClientRepository.js.map