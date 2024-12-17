import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions";
import Spinner from "../helpers/utils/Spinner.jsx";
import ProductDetails from "../components/productDetails/ProductDetails.jsx";
import {fetchProductById} from "../api/services/products";
import axios from "axios";


const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        loadProduct();
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