import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions.jsx";
import ProductCard from "../components/productCard/ProductCard";
import Spinner from "../helpers/utils/Spinner.jsx";
import { fetchProducts } from "../api/services/products";

import '../styles/product-block.scss'

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [itemsPerPage] = useState(6);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <main className={'product-block'}>
            <h1 className={'product-block__heading'}>Products</h1>
            <div className="container">
                <div className="row">
                    {products.slice(0, itemsPerPage).map((product) => (
                        <div className="col-lg-4 col-6" key={product.id}>
                            <ProductCard
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CatalogPage;