import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div
                        className="img-container p-5"
                        onClick={()=>console.log("Image was clicked")}
                    >
                        {/* Firstly an image will appear which is clickable */}
                        <Link to="/details">
                            <img src={img} alt="productImage" className="card-img-top"></img>
                        </Link>

                        {/* After image of product we will have a button which will have functionality to add to card if item hasnt yet been added, and if  its already in cart then the button will be disable. for this we'll use the inCart value from the data */}
                        
                        <button
                            className="cart-btn"
                            disabled={inCart?true:false}
                            onClick={()=>{
                                console.log("added to the cart")
                            }}
                        >
                        {/* Here we are displaying a disabled button with "in cart" if item is already added, else we are displaying a working add to cart button with cart icon. For this we are using ternary operator */}
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>{" "} in cart</p>
                            ) : (
                                <i className="fas fa-cart-plus"></i>
                            )}
                        </button>


                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div `

`
