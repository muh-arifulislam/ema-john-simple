import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const priceCalc = (priceType) => {
        let price = 0;
        for (const item of cart) {
            price += item[priceType];
        }
        return price;
    }
    const totalPrice = priceCalc('price');
    const shippingCharge = priceCalc('shipping');
    const tax = ((totalPrice + shippingCharge) * 5) / 100;
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart'>
            <h3 className='cart-heading'>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;