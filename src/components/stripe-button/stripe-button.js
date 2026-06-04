import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51TeaZHAhW1tASljzQKaiBINnwgR8RZDWLnu7DzqPr4OtGK4LgDroONF6vNB7lKctJIe4GyOlKjkH7y7j8sYyTanu00a9jrd07U";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };

    return (
        <StripeCheckout
          label='Pay Now'
          name='Clothina'
          currency="INR"
          billingAddress
          shippingAddress
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEKu9gkYBw8cCKl_GAS1ZuJfUZdIrHS4Fogw&usqp=CAU'
          description={`Your total is ₹${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
      );
};

export default StripeCheckoutButton;
