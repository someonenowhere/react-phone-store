import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pranitkalbandelogo.png'

export default class Navbar extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-sm">
                <Link to="/">
                    <img src={logo} width="40" className="navbar-brand" alt="" />
                </Link>                
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item">                        
                        <Link to="/" className="ml-5">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="ml-5">Product</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-primary">
                        <i className="fas fa-cart-plus"></i> Cart
                    </button>
                </Link>
            </nav>
        </header>
    )
  }
}
