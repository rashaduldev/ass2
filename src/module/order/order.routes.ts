import { Router } from "express";
import { createOrder } from "./order.controller";
import calculateRevenue from "./revenue.controller";



const orderRouter = Router();

orderRouter.post("/api/orders",createOrder );
orderRouter.get("/api/orders/revenue", calculateRevenue);

export default orderRouter;
