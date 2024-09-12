import React, { Component } from "react";

class ProductsList extends Component {
    state = {
        cartItems: [
            {
                id: '1',
                name: 'iPhone 11',
                price: 999,
            },
            {
                id: '2',
                name: 'iPad Pro',
                price: 799,
            },
        ]
    }

    render() {
        const total = this.state.cartItems.reduce(
            (acc, item) => acc + item.price,
            0
        )

        return (
            <div className="products">
                {/* <span>{this.state.cartItems[0].name}</span> */}
                <ul className="products__list">
                    {this.state.cartItems.map(item => (
                        < li key={id} className="products__list-item">
                            <span className="products__item-name">{item.name}</span>
                            <span className="products__item-price">{item.price}</span>
                        </li>
                    )
                    )}

                    {/* <li className="products__list-item">
                        <span className="products__item-name">iPhone 11</span>
                        <span className="products__item-price">$999</span>
                    </li>
                    <li className="products__list-item">
                        <span className="products__item-name">iPad Pro</span>
                        <span className="products__item-price">$799</span>
                    </li> */}
                </ul>
                <div className="products__total">Total: $1798</div>
            </div>
        )
    }

}

export default ProductsList;