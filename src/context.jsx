import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//It consists of provider and consumer where the provider provides the information that needs to be passed on and consumer is what actually calls that information wherever needed

class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    };
    handleDetail = ()=>{
        console.log("Hello from details")
    };
    addToCart = ()=>{
        console.log("Hello from add to cart")
    };

    render() {
        //this provider sits at the highest level in our application so it can be accessible from anywhere within in. So in this case we place it in our index.js file
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
