import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <div className='mb-2'>
                    <Navbar modalId={this.props.modalId} />
                </div>
                <Outlet />
            </div>
        )
    }
}
