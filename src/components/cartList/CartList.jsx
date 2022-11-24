import React from 'react';
import Cart from '../cart/Cart';
import './cartlist.css';
import { useSelector } from 'react-redux';
import { cartListSelector, grandCost } from '../../redux/selector';

const CartList = () => {
    const data = useSelector(cartListSelector);
    const cost = useSelector(grandCost);
    return (
        <>
            <div className={data.length === 0 ? 'box' : 'box none'}>
                <h1>Cart None</h1>
            </div>
            <section className={data.length > 0 ? 'cart-list' : 'cart-list none'}>
                <div className="container">
                    <div className="my-cart">
                        {data.map((item) => {
                            return <Cart
                                key={item.idProduct}
                                idProduct={item.idProduct}
                                category={item.category}
                                productName={item.productName}
                                price={item.price}
                                quality={item.quality}
                                link={item.link}
                            />
                        })}
                    </div>
                    <div className="checkout">
                        <h3 className="checkout-title">Order Summary</h3>
                        <div className="checkout-detail">
                            <div className="selected">
                                <p className="title">Selected { } items(s) Price</p>
                                <p className="value">$9.04</p>
                            </div>
                            <div className="dicount">
                                <p className="title">Discount</p>
                                <p className="value">- 0$</p>
                            </div>
                            <div className="delivery-cost">
                                <p className="title">Delivery Cost</p>
                                <p className="value">+ $10.00</p>
                            </div>
                        </div>
                        <h3 className="grand-total">
                            <p className="title">Grand Cost</p>
                            <p className="value">${cost}</p>
                        </h3>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartList