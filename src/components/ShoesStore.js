import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'

const data =
    [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },
        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },
        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ]


export default class ShoesStore extends Component {
    constructor() {
        super();
        this.state = {
            cart: [{ ...data[0], soLuong: 2 }]
        }
    }
    addToCart = (prod) => {
        let { cart } = this.state;

        let isExist = cart.filter((item) => item.maSP === prod.maSP);
        if (isExist?.length > 0) {
            isExist[0].soLuong++;
            this.setState(pre => pre);
        }
        else {
            this.setState({
                ...this.state,
                cart: [...this.state.cart, { ...prod, soLuong: 1 }]
            })
        }
    }
    removeFromCart = (prodId) => {
        let { cart } = this.state;

        let newCart = cart.filter(item => item.maSP !== prodId);

        this.setState({
            ...this.state,
            cart: newCart
        })
    }
    incCart = (prodId) => {
        let { cart } = this.state;

        let prod = cart.filter(item => item.maSP === prodId)[0];

        prod.soLuong++;

        this.setState(pre => pre);
    }

    descCart = (prodId) => {
        let { cart } = this.state;

        let prod = cart.filter(item => item.maSP === prodId)[0];

        prod.soLuong--;

        if (prod.soLuong <= 0) {
            if (window.confirm('Remove this item from cart?'))
                this.removeFromCart(prodId);
            else prod.soLuong++; // tăng lại khi không xóa item
        }
        this.setState(pre => pre);
    }
    render() {
        return (
            <div className='container'>
                <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} incCart={this.incCart} descCart={this.descCart} />
                    </div>
                </div>
                <ProductList modalId={this.props.modalId} data={data} addToCart={this.addToCart} />
            </div>
        )
    }
}
