import React, { Component } from 'react'

export default class CartChiTiet extends Component {
    render() {
        const { prod } = this.props;
        return (
            <div className="modal-content" style={{ width: '900px', transform: 'translateX(-170px)' }}>
                <div className='card'>
                    <div className='modal-header'>
                        <h3>Chi tiết sản phẩm</h3>
                    </div>
                    <div className='modal-body'>
                        {
                            prod &&
                            <>
                                <h4>{prod.name} - ({prod.alias})</h4>
                                <div className='row' style={{ padding: '1rem 2rem' }}>
                                    <div className='col-6'>
                                        <img src={prod.image} alt={prod.name} style={{ height: '300px', border: '1px solid #333' }} />
                                    </div>
                                    <div className='col-6' style={{ padding: '1rem 0 0 0' }}>
                                        <p><span style={{ fontWeight: 'bold' }}>Mô tả chi tiết: </span>{prod.description}</p>
                                        <p><span style={{ fontWeight: 'bold' }}>Price: </span>{prod.price} $</p>
                                        <p><span style={{ fontWeight: 'bold' }}>Số lượng: </span>{prod.quantity}</p>
                                    </div>
                                </div>

                            </>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        )
    }
}
