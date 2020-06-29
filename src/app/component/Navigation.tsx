import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav >
        <ul className="clearfix">
            <li className="active"><Link to="/">Chat</Link></li>
            <li><Link to="/settings">Settings</Link></li>
        </ul>
    </nav>
)

export default Navigation