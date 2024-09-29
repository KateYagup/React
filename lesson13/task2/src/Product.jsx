import React from "react";

const Product = ({ match }) => {
    // console.log(rest);
    return (
        <div className="product">
            {match.params.productId}
        </div>
    )
}

export default Product;