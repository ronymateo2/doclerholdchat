import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav >
        <ul className="clearfix">
            <li><NavLink exact={true} activeClassName='active' to="/">Chat</NavLink ></li>
            <li><NavLink exact={true} activeClassName='active' to="/settings">Settings</NavLink ></li>
        </ul>
    </nav>
)

export default Navigation