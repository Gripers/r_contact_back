"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose_1 = require("mongoose");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const global_1 = __importDefault(require("./routers/global"));
const withF_1 = __importDefault(require("./routers/withF"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', global_1.default);
app.use('/api', withF_1.default);
(0, mongoose_1.set)('strictQuery', false);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoose_1.connect)('mongodb+srv://riot:riot@cluster0.q50nq5f.mongodb.net')
        .then(() => {
        console.log('db: ok');
    })
        .catch(() => {
        console.log('db: bad');
    });
    app.listen(8080, () => console.log('server started'));
});
start();
