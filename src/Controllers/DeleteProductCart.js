import Cart from '../Models/carts.js'
import Product from '../Models/products.js';

let deleteProduct = async (req, res) => {
    try {
        let { productId } = req.params;
        /*buscamos el producto en el carrito */
        const productInCart = await Cart.findById(productId);
        /*Buscamos el producto en nuestra DB por el nombre del que esta en el carrito, */
        let { name, img, price, _id } = await Product.findOne({
            name: productInCart.name,
        });
            /*Buscamos y eliminamos productos con la*/
        await Cart.findByIdAndDelete(productId);

        await Product.findByIdAndUpdate(
            _id,
            { inCart: false, name, img, price },
            { new: true }
        ).then((product) => {
            res.json({
                mensaje: `El producto ${product.name} fue eliminado del carrito`,
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Hubo un error",
            error: error.message,
        });
    }
};

export default deleteProduct;
