import React, { Component } from "react";
import ProductsList from './ProductsList';

class ShoppingCart extends Component {

    render() {
        return (
            <div className="column" >
                <ProductsList />
            </div>
        )
    }


}

export default ShoppingCart;