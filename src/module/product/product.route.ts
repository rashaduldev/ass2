import { Router } from "express";
import productController from "./product.controller";

const productRoute=Router();

productRoute.post('/api/create-products',productController.createProduct)
productRoute.get('/api/products',productController.getProduct)
productRoute.get('/api/products/:productId',productController.getSingleProduct)
productRoute.put('/api/products/:productId',productController.UpdateProduct)
productRoute.delete('/api/products/:productId',productController.deleteProduct)

export default productRoute;