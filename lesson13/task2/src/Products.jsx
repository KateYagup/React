import React from "react";
import Product from './Product';

const Products = () => {
    return (
        <div className="page__content">
            <h1>Products</h1>
            <Product />
            <span>Select a product please</span>
        </div>
    )
}

export default Products;