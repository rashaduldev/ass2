"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const productRoute = (0, express_1.Router)();
productRoute.post('/api/create-products', product_controller_1.default.createProduct);
productRoute.get('/api/products', product_controller_1.default.getProduct);
productRoute.get('/api/products/:productId', product_controller_1.default.getSingleProduct);
productRoute.put('/api/products/:productId', product_controller_1.default.UpdateProduct);
productRoute.delete('/api/products/:productId', product_controller_1.default.deleteProduct);
exports.default = productRoute;
