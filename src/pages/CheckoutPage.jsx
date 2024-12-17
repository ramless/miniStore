import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../actions/actions.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.address || !formData.phone) {
            alert("Fill all fields.");
            return;
        }

        console.log("Order info:", {
            user: formData,
            cart,
        });

        dispatch(clearCart());
        navigate("/");
        alert("Order successfully!");
    };

    useEffect(() => {
        if (cart.length === 0) {
            navigate("/");
        }
    }, [cart, navigate]);

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">Order Information</h1>
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <h2 className="mt-4">Your Order:</h2>
                <ul className="list-group mb-3">
                    {cart.map((item) => (
                        <li key={item.id} className="list-group-item d-flex align-items-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="me-3"
                                style={{ width: '50px', height: 'auto' }}
                            />
                            <div>
                                <strong>{item.title}</strong> - {item.quantity} x ${item.price}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-warning">
                        Create Order
                    </button>
                    <Link to="/" className="btn btn-secondary">
                        Back to Products
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;