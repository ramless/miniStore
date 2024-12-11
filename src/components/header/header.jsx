import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeFromCart } from "../../actions/actions.jsx";

import "./header.scss";

const Header = () => {
    const cart = useSelector((state) => state.cart.items); // Получаем товары из Redux
    const uniqueItemsCount = useMemo(() => cart.length, [cart]); // Мемоизируем количество товаров
    const location = useLocation(); // Get current location
    const dispatch = useDispatch(); // Диспетчер для вызова действий

    const isCartOrCheckoutPage = location.pathname === '/cart' || location.pathname === '/checkout';

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id)); // Диспетчеризация действия для удаления товара
    };

    return (
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col">
                        <Link to="/">Products</Link>
                    </div>
                    {!isCartOrCheckoutPage && (
                        <div className="col text-end position-relative">
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="cartDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Cart <span>{uniqueItemsCount}</span>
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="cartDropdown"
                                >
                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((item) => (
                                                <li key={item.id} className="dropdown-item d-flex align-items-center">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        style={{ width: "50px", height: "50px", marginRight: "10px" }}
                                                    />
                                                    <div className={'dropdown-item-block'}>
                                                        <h6>
                                                            <Link className={'link'}
                                                                  to={`/product/${item.id}`}>{item.title}</Link>
                                                        </h6>
                                                        <small>
                                                            {item.quantity} x {item.price}$
                                                        </small>
                                                        <span className={'dropdown-item-block-remove'}
                                                            style={{cursor: "pointer", marginRight: "auto"}}
                                                            onClick={() => handleRemoveFromCart(item.id)} // Удаление товара
                                                        >X
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                            <li className="dropdown-item text-center">
                                                <Link to="/cart" className={'btn btn-secondary'}>Go to Cart</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="dropdown-item text-center">Cart is empty</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;