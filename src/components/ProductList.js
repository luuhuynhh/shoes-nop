import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        const { data, addToCart } = this.props;
        return (
            <div>
                <h3 className='mt-2 text-center'>Danh sách sản phẩm</h3>
                <div className='row'>
                    {data.map((prod) => {
                        return <ProductItem modalId={this.props.modalId} key={prod.id} prod={prod} addToCart={addToCart} />
                    })}
                </div>
            </div>
        )
    }
}
