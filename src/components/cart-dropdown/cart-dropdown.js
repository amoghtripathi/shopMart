import React from "react";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';

const CartDropdown =({ cartItems })=>(
    <div className="cart-dropdown">
        <div className="cart-items" >
            {cartItems.length ? ( 
            cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                <span className="empty-message">Your cart is MT</span>
            )
            }
        </div>

        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);