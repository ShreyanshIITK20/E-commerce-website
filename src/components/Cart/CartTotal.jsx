import React from "react";
import { Link } from "react-router-dom";
import PayPal from "./Paypal";

export default function CartTotal({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 text-capitalize text-end">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear cart
              </button>
            </Link>

            <h5>
              <span className="text-title">Subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>

            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>

            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPal 
                total={cartTotal} 
                clearCart={clearCart} 
                history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
