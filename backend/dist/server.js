"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
mongoose_1.default.connect(process.env.MONGO_URI || "mongodb://localhost:27017/networx")
    .then(() => { console.log("mongodb successfully connected"); })
    .catch((err) => {
    console.log(`error while connecting to mongodb ${err}`);
});
app.listen(port, () => {
    console.log("app listening to port ", port);
});
