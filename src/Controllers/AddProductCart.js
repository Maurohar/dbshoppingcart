import Cart from '../Models/carts.js';
import Product from '../Models/products.js';

let AddProductCart = async (req, res) => {
    let { name, img, price } = req.body;

    /* Nos fijamos si tenemos el producto */
    let estaEnProducts = await Product.findOne({ name });

    /* Nos fijamos si todos los campos vienen con info, cuando colocamos por ejemplo (name !== "")  estamos verficando que name sea distinto a nada.*/
    let noEstaVacio = name !== "" && img !== "" && price !== "";

    /* Nos fijamos si el producto ya está en el carrito */
    let estaEnElCarrito = await Cart.findOne({ name });

    /* Si no tenemos el producto */
    if (!estaEnProducts) {
        res.status(400).json({
            mensaje: "Este producto no está en nuestra base de datos"
        });
    } else if (noEstaVacio && !estaEnElCarrito) {
        let newProductInCart = new Cart({ name, img, price, ammount: 1 });

        await Product.findByIdAndUpdate(
            estaEnProducts?._id,
            { inCart: true, name, img, price },
            { new: true }
        )
        .then((product) => {
            newProductInCart.save();
            res.json({
                mensaje: "El producto fue agregado al carrito",
                product,
            });
        })
        .catch((error) => console.error(error));
    } else if (estaEnElCarrito) {
        res.json({
            mensaje: "El producto ya está en el carrito",
        });
    }
};

export default AddProductCart;