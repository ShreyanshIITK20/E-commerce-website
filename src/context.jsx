import React, { Component } from 'react'

const ProductContext = React.createContext();
//It consists of provider and consumer where the provider provides the information that needs to be passed on and consumer is what actually calls that information wherever needed


class ProductProvider extends Component {
    render() {
        //this provider sits at the highest level in our application so it can be accessible from anywhere within in. So in this case we place it in our index.js file
        return (
            <ProductContext.Provider value="Hello from context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
