import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand"></img>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link active">Products</Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <button type="button" className="btn btn-outline-warning"><i className="fas fa-cart-plus"></i> My cart</button>
          </Link>
        </div>
      </nav>
    );
  }
}
