import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions.jsx";
import ProductCard from "../components/productCard/ProductCard";
import Spinner from "../helpers/utils/Spinner.jsx";

import '../styles/product-block.scss'

const CatalogPage = () => {
    const [products, setProducts] = useState([]);
    const [itemsPerPage] = useState(6);  // Количество товаров на странице
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true); // Start loading
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Stop loading after data is fetched
            }
        };

        fetchProducts();
    }, []); // Запускаем запрос только один раз при монтировании компонента

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Добавляем товар в корзину
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <main className={'product-block'}>
            <h1 className={'product-block__heading'}>Products</h1>
            <div className="container">
                <div className="row">
                    {products.slice(0, itemsPerPage).map((product) => (  // Ограничиваем количество товаров
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