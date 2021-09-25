import React, { Component } from 'react'
import Product from './Product'
import Title from './title'
import { storeProducts } from '../data'
import { ProductConsumer } from '../context'

export default class productList extends Component {
    state={
        product:storeProducts
    }
    render() {
        console.log(this.state.product)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Product list"/>
                        <div className="row">
                            <ProductConsumer>
                                {hello => {
                                    return <h1>{hello}</h1>;
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
