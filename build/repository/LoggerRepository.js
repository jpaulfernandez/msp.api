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
const logger_1 = require("../model/helper/logger/logger");
class LogerRepository {
    constructor() {
        this._model = logger_1.loggerSchema;
        this._model = logger_1.loggerSchema;
    }
    static WriteLog(err, message, dateError, done) {
        return __awaiter(this, void 0, void 0, function* () {
            yield logger_1.loggerSchema.create({ err, message, dateError }, done);
        });
    }
}
//# sourceMappingURL=LoggerRepository.js.map