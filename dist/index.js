"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', index_1.default);
app.use((_req, res) => {
    res.status(404).send('<h2>some thing went wrong<h2>');
});
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
exports.default = app;
