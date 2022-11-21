import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        const { prod, addToCart } = this.props;
        return (
            <div className='col-4'>
                <div className='card'>
                    <img src={prod.image} alt='' />
                    <div className='card-body'>
                        <h3>{prod.name}</h3>
                        <p>{prod.price} $</p>
                        <button className='btn btn-secondary mr-2'>Xem chi tiết</button>
                        <button type="button" data-toggle="modal" data-target={`#${this.props.modalId}`} className='btn btn-danger' onClick={() => addToCart(prod)}>Thêm giỏ hàng <i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
