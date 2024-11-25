"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const revenue_controller_1 = __importDefault(require("./revenue.controller"));
const orderRouter = (0, express_1.Router)();
orderRouter.post("/api/orders", order_controller_1.createOrder);
orderRouter.get("/api/orders/revenue", revenue_controller_1.default);
exports.default = orderRouter;
