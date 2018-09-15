"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(schema) {
        this._model = schema;
    }
    retrieve(done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.find({}, done);
        });
    }
    findById(_id, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.findById(_id, done);
        });
    }
    findOne(cond, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.findOne(cond, done);
        });
    }
    find(cond, field, options, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._model.find(cond, options, done);
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map