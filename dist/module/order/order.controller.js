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
exports.createOrder = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
// Place an order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, product: productId, quantity, totalPrice } = req.body;
    try {
        const product = yield product_model_1.default.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                status: false,
            });
        }
        if (product.quantity < quantity) {
            return res.status(400).json({
                message: "Insufficient stock",
                status: false,
            });
        }
        // Deduct quantity and update inStock status
        product.quantity -= quantity;
        product.inStock = product.quantity > 0;
        yield product.save();
        // Create order
        const order = yield order_model_1.default.create({ email, product: productId, quantity, totalPrice });
        return res.status(201).json({
            message: "Order created successfully",
            status: true,
            data: order,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: false,
            error: error.message,
        });
    }
});
exports.createOrder = createOrder;
