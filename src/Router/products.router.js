import addProductCartController from '../Controllers/AddProductCart.js';
import deleteProductCartController from '../Controllers/DeleteProductCart.js';
import getProductController from '../Controllers/GetProduct.js';
import getProductCartController from '../Controllers/GetProductCart.js';
import putProductController from '../Controllers/PutProduct.js';


import express from 'express';
const router = express.Router();

router.get("/products", getProductController);
router.get("/products-cart", getProductCartController);
router.post("/products-cart", addProductCartController);
router.put("/products-cart/:productId", putProductController);
router.delete("/products-cart/:productId", deleteProductCartController);

export default router;