"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSchema = void 0;
const mongoose_1 = require("mongoose");
exports.cardSchema = new mongoose_1.Schema({
    name: String,
    imgURL: String
});
exports.default = (0, mongoose_1.model)('cards', exports.cardSchema);
