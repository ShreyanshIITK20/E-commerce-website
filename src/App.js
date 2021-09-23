import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Product from './components/Product';
import Default from './components/Default';


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Product></Product>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
