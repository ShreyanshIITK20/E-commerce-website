import React, { Component } from 'react'
import Product from './Product'
import Title from './title'

export default class productList extends Component {
    state={
        product:[]
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Product list"/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
