import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cart, removeFromCart, incCart, descCart } = this.props;
        return (
            <div className="modal-content" style={{ width: '900px', transform: 'translateX(-170px)' }}>
                <div className='card'>
                    <div className='modal-header'>
                        <h3>Giỏ hàng</h3>
                    </div>
                    <div className='modal-body'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Mã số</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá bán</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((prod, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{prod.maSP}</td>
                                            <td>
                                                <img src={prod.hinhAnh} alt={prod.tenSP} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                            </td>
                                            <td>{prod.tenSP}</td>
                                            <td>{prod.giaBan} VND</td>
                                            <td>
                                                <button className='btn btn-dark mx-2' onClick={() => incCart(prod.maSP)}>+</button>
                                                {prod.soLuong}
                                                <button className='btn btn-dark mx-2' onClick={() => descCart(prod.maSP)}>-</button>
                                            </td>
                                            <td>{prod.soLuong * prod.giaBan} VND</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => removeFromCart(prod.maSP)}>Xóa</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        )
    }
}
