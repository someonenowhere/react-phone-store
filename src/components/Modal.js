import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <div className="container-fluid modal-container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-8 text-center text-capitalize p-5" id="modal">
                                        <h5>Item addded in the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price:  &#8377; {price}</h5>
                                        <Link to="/">
                                            <button className="btn btn-primary my-3" onClick={()=>closeModal()}>Continue Shopping</button>
                                        </Link>
                                        <Link to="/cart">
                                            <button className="btn btn-warning" onClick={()=>closeModal()}>Go To Cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )                        
                    }

                }}
            </ProductConsumer>
        )
    }
}
