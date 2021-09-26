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
                    
                    {/* Image container */}
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

                    {/* Card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div `
    .card{
        border-color:transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0,2);
            box-shadow:2px 2px 5px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition:all 0.5s linear;
        ${'' /* transitions are used so that the changes on hovering and othe psuedo classes are applied over time with some animated effect */}
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2)
    }

    ${'' /* Next goal is to place the cart button towards the right bottom of image, this can be done by positioning it absolute to the parent container and making right and bottom 0px */}
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background:var(--lightBlue);
        border:none;
        color:var(--mainWhite);
        border-radius:0.5rem 0 0 0;
        font-size:1.5rem;
        ${'' /* Now we want our button to appear only when we hover, for other position it should be hidden, so we are translating it in right and bottom direction for 100% and it will come up only on hover */}
        transform:translate(100%,100%);
        transition:all 0.5s linear;
    }
    .img-container:hover .cart-btn{
        transform: translate(0,0);
    }
`
