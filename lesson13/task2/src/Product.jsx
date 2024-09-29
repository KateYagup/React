import React from "react";

const Product = ({ match }) => {
    // console.log(rest);
    return (
        <div className="product">
            {`Product is a ${match.params.productId}`}
        </div>
    )
}
export default Product;