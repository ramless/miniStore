import React from "react";
import { Link } from "react-router-dom";

import './ProductCard.scss'

const ProductCard = React.memo(({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <h2 className={'product-card__heading'}>{product.title}</h2>
            <img className={'product-card__image'} src={product.image} alt={product.title}/>
            <p className={'product-card__price'}>{product.price} $</p>
            <div className="d-flex justify-content-center gap-3">
                <button className={'product-card__button btn btn-warning'} onClick={() => onAddToCart(product)}> Add to Cart
                </button>
                <Link to={`/product/${product.id}`} className={'btn btn-secondary'}>Details</Link>
            </div>
        </div>
    );
});

export default ProductCard;