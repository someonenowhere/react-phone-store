import React from 'react';
import { Link } from 'react-router-dom';
import PayPalbutton from './PayPalButton';

export default function CartTotals({ value, history }) {
    const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 ml-sm-5 ml-md-auto mt-2 col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger mb-3 px-5 text-uppercase" type="button" onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="font-italic">cart subtotal : </span>
                            <strong>&#8377; {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="font-italic">cart tax : </span>
                            <strong>&#8377; {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="font-italic">cart total : </span>
                            <strong>&#8377; {cartTotal}</strong>
                        </h5>
                        <PayPalbutton 
                            total={cartTotal} 
                            clearCart={clearCart} 
                            history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
