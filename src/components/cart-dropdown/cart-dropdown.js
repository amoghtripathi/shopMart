import React from "react";
import "./cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from 'reselect';

const CartDropdown =({ cartItems, history })=>(
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

        <CustomButton onClick={()=> history.push("/checkout")}>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));