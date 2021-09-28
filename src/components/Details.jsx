import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company,img,info,price,title,inCart}=value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price : <span>$</span>{[price]}</strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some information about product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <Link to="/">
                                        <button className="btn btn-outline-primary btn-lg">Back to products</button>
                                        {/* <ButtonContainer>back to products</ButtonContainer> */}
                                    </Link>
                                    &nbsp;
                                    <button
                                        className="btn btn-outline-warning btn-lg ml-1"
                                        disabled={inCart?true:false}
                                        onClick={()=>{value.addToCart(id)}}
                                    >
                                        {inCart?"In cart":"Add to cart"}
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
