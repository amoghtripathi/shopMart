import React, { useState } from "react";
import "./checkout.scss";
import { connect } from 'react-redux';
//import StripeCheckoutButton from "../../components/stripe-button/stripe-button";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { clearCart } from '../../redux/cart/cart.actions';
import { saveOrderToFirestore } from '../../firebase/firebase.utils';

const CheckoutPage = ({ cartItems, total, clearCart }) => {

  const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = async () => {
  try {

    const response = await fetch(
  `${process.env.REACT_APP_API_URL}/create-order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: total
        })
      }
    );

    const order = await response.json();

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "ShopMart",

      description: "Test Transaction",

      order_id: order.id,

      handler: async function (response) {

  await saveOrderToFirestore({
    paymentId: response.razorpay_payment_id,
    amount: total,
    items: cartItems,
    createdAt: new Date()
  });

  alert(
    `Payment Successful\nPayment ID: ${response.razorpay_payment_id}`
  );

  setPaymentSuccess(true);
  clearCart();
}
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (error) {
    console.error(error);
    alert("Payment failed");
  }
};

    return (
        <div className='checkout-page'>

            {cartItems.map(cartItem => (
                <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                />
            ))}

            {paymentSuccess ? (
  <div className='payment-success'>
    <h2>Thank you for your purchase!</h2>
  </div>
) : cartItems.length > 0 ? (
  <>
    <div className='total'>
  TOTAL: ₹{total}
</div>

<div className='test-mode-notice'>
  <strong>Demo Checkout</strong>
  <br />
  Payments are processed in Razorpay Test Mode.
  <br />
  No real money is charged.
  <br />
  Card Number: 6527 6589 0000 1005
  <br />
  Expiry: Any future date
  <br />
  CVV: Any 3 digits (if asks for OTP then enter any random number)
</div>

<button
  className="razorpay-button"
  onClick={handlePayment}
>
  🔒 Pay ₹{total}
</button>
  </>
) : (
  <div className='empty-cart-message'>
    <h2>Your cart is empty.</h2>
  </div>
)}

            </div>
        );
    };

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });
  
const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);