import { prettyDOM } from '@testing-library/dom';
import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//It consists of provider and consumer where the provider provides the information that needs to be passed on and consumer is what actually calls that information wherever needed

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts = ()=>{
        let tempProducts = []
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        });
        this.setState(()=>{
            return {products:tempProducts};
        });
    };

    // getItem function finds the product from the data.js correspoding to the id passed in
    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product
    };

    // handleDetail function will be executed when we click on any certain product in product list, it will in turn execute getItem to find that product and display the corresponding details of the product from data.js
    handleDetail = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };

    addToCart = (id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            ()=>{
                return {products:tempProducts,cart:[...this.state.cart,product]};
            },
            ()=>{
                console.log(this.state);
            }
        )

    };

    openModal = id => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }

    closeModal = () => {
        this.setState(()=>{
            return {modalOpen:false}
        })
    }

    //now we have some methods which are related to the functionality of cart
    increment = (id) => {
        console.log("this is increment method")
    }

    decrement = (id) => {
        console.log("this is decrement method")
    }

    removeItem = (id) => {
        console.log("item removed")
    }

    clearCart = () => {
        console.log("cart cleared")
    }

    render() {
        //this provider sits at the highest level in our application so it can be accessible from anywhere within in. So in this case we place it in our index.js file
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
