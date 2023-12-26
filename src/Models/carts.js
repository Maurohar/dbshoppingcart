import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

let Cart = mongoose.model('Cart', CartSchema);

export default CartSchema;