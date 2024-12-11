import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // useParams для получения ID товара из URL
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions";
import Spinner from "../helpers/utils/Spinner.jsx";
import ProductDetails from "../components/productDetails/ProductDetails.jsx";
import axios from "axios";


const ProductDetailPage = () => {
    const { id } = useParams();  // Получаем ID товара из URL
    const [product, setProduct] = useState(null);  // Состояние для хранения информации о товаре
    const [loading, setLoading] = useState(true);  // Состояние для отображения загрузки
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Загружаем данные товара по ID
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке товара", error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ ...product, quantity: 1 }));
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (!product) {
        return <p>Product not find</p>;
    }

    return (
        <ProductDetails product={product} handleAddToCart={handleAddToCart} />
    );
};

export default ProductDetailPage;