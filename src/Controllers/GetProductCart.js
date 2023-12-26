import Cart from '../Models/carts.js';

let getProductsCart = async (req, res) => {
    try {
        let productsCart = await Cart.find();

        if (productsCart) {
            res.json({ productsCart });
        } else {
            res.json({ mensaje: "No hay productos" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: "Error al obtener productos" });
    }
};

export default getProductsCart;