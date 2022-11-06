import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <NavLink to='/' className="navbar-brand" href="#">Shoes App</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink to='/' className="nav-link" href="#">Home</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button type="button" data-toggle="modal" data-target={`#${this.props.modalId}`} style={{ backgroundColor: 'transparent', cursor: 'pointer' }}><i className="fa-solid fa-cart-shopping"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
