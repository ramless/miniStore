import React from "react";
import "./ProductDetails.scss";

const ProductDetails = ({ product, handleAddToCart }) => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="card shadow-lg p-3">
                        <div className="row g-0">
                            {}
                            <div className="col-md-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-fluid rounded-start card-image"
                                    style={{ padding: "24px" }}
                                />
                            </div>
                            {}
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h1 className="card-title fs-4 fw-bold">{product.title}</h1>
                                    <p className="card-text text-muted">{product.description}</p>
                                    <p className="card-text">
                                        <span className="fs-5 text-danger fw-bold">Цена: {product.price}$</span>
                                    </p>
                                    <div className="row">
                                        <div className="col-5">
                                            <button
                                                className="btn btn-warning btn-lg"
                                                onClick={handleAddToCart}
                                            >
                                                Добавить в корзину
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;