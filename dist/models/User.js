"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    fio: { type: String, required: true, unique: true },
    phone_number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    tags: [{ type: String, unique: true }],
});
exports.default = mongoose_1.default.model('User', userSchema);
