import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../actions/actions.jsx";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem/CartItem.jsx";
import { calculateTotalPrice } from "../helpers/utils/CalculatePrice.jsx";

const CartPage = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    if (cart.length === 0) {
        return (
            <div className="container py-5 text-center">
                <h1>Your Cart is Empty</h1>
                <Link to="/" className="btn btn-secondary mt-3">Back to Products</Link>
            </div>
        );
    }
    const totalAmount = calculateTotalPrice(cart);

    const validTotalAmount = !isNaN(totalAmount) ? totalAmount : 0;
    return (
        <div className="container py-5">
            <h1 className="mb-4">Your Cart</h1>
            <ul className="list-group">
                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onRemove={(id) => dispatch(removeFromCart(id))}
                    />
                ))}
            </ul>
            <div className="mt-4 text-end">
                <h3>Total: {Number(validTotalAmount).toFixed(2)} $</h3>
            </div>
            <div className="d-flex justify-content-between mt-4">
                <button
                    onClick={() => dispatch(clearCart())}
                    className="btn btn-danger"
                >
                    Clear Cart
                </button>
                <Link to="/checkout" className="btn btn-warning">
                    Go to Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartPage;