import React from "react";



const CartModal = ({ item, onClose }) => {
    if (!item) return null; // Если нет данных о товаре, не показываем модальное окно

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Added to Cart</h2>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} width="100" />
                <p>{item.price} $</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CartModal;