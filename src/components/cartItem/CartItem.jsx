import React from "react";
import {useDispatch } from "react-redux";
import {calculatePrice} from "../../helpers/utils/CalculatePrice.jsx";
import {Link} from "react-router-dom";
import { increaseQuantity, decreaseQuantity } from "../../actions/actions.jsx"; // Импортируем действия


const CartItem = ({ item, onRemove }) => {
    const dispatch = useDispatch();
    const totalPrice = calculatePrice(item.price, item.quantity);

    const handleIncrease = () => {
        dispatch(increaseQuantity(item.id)); // Увеличиваем количество товара
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(item.id)); // Уменьшаем количество товара
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid me-3"
                    style={{width: '100px', height: 'auto'}}
                />
                <div>
                    <h5>
                        <Link style={{color: '#000'}} to={`/product/${item.id}`}>{item.title}</Link>
                    </h5>
                    <div className={'d-flex align-items-center mt-2'}>
                        <h4 className={'m-0'}>{item.price}$</h4>
                        <div className="d-flex align-items-center mx-2 border p-2 rounded">
                            <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
                            <span className="mx-2">{item.quantity}</span>
                            <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-end">
                <p><strong>Total: {totalPrice} $</strong></p>
                <button
                    onClick={() => onRemove(item.id)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default CartItem;