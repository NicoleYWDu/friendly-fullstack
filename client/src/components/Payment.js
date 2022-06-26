import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Friendly"
        description="5$ for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn pink lighten-3">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payment);
