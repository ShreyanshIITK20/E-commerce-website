import React, { Component } from 'react'
import Title from '../title'
import CartColumns from './CartColumns'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart"/>
                <CartColumns/>
            </section>
        )
    }
}
