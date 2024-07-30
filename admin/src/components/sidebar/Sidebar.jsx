import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to ='/add'className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to ='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>list items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to ='/orders' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>order items</p>
            </NavLink>
        </div>
        </div>
  )
}

export default Sidebar