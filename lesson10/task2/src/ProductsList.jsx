import React, { Component } from "react";

class ProductsList extends Component {


    render() {
        const total = this.props.cartItems.reduce(
            (acc, item) => acc + item.price,
            0
        )

        return (
            <div className="products">
                <ul className="products__list" >
                    {this.props.cartItems.map(({ name, price }) => (
                        < li className="products__list-item" key={this.props.cartItems.id}>
                            <span className="products__item-name">{name}</span>
                            <span className="products__item-price">{price}</span>
                        </li>
                    )
                    )}
                </ul>
                <div className="products__total">Total: $1798</div>
            </div>
        )
    }

}

export default ProductsList;