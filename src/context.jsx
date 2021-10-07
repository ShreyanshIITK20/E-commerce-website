import { prettyDOM } from "@testing-library/dom";
import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//It consists of provider and consumer where the provider provides the information that needs to be passed on and consumer is what actually calls that information wherever needed

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // getItem function finds the product from the data.js correspoding to the id passed in
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // handleDetail function will be executed when we click on any certain product in product list, it will in turn execute getItem to find that product and display the corresponding details of the product from data.js
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
        // this is the callback function whose function is to update the state's total value when we add some item to the cart
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  //now we have some methods which are related to the functionality of cart
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find( item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    // now increment the quantity of product by 1 and find new price by multiplying price of one item with number of items after incrementing
    product.count += 1;
    product.total = product.count * product.price;

    this.setState( () => {
      return {
        cart: [...tempCart]
      }
    } , () => {
      this.addTotals();
    } )
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find( item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    // now decrement the quantity of product by 1 and find new price by multiplying price of one item with number of items after decrementing
    if(product.count>1){
      product.count -= 1;
      product.total = product.count * product.price;

      this.setState( () => {
        return {
          cart: [...tempCart]
        }
      } , () => {
        this.addTotals();
      } )  
    }
    else this.removeItem(id)
    
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    //finding the removed item from the product's state by finding its index, and then setting its total, incart and count value to 0 (default)
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
        //callback function to retotal everything
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        // this is a callback function which sets the state back to its original state and also sets the totals to their original state
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));

    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    //this provider sits at the highest level in our application so it can be accessible from anywhere within in. So in this case we place it in our index.js file
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
