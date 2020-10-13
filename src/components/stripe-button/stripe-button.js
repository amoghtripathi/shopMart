import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HYKZpKlChDtnoTmgx8C45wohFpwa69Qg77ATNwmSRi5PO8E9swb0Wi9fyB8AiMm0TA1WVj19PElKMKRrHLvmVnR00rZEfvOV2";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

    return (
        <StripeCheckout
          label='Pay Now'
          name='Clothina'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
};