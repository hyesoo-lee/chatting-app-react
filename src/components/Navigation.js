import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
    return (
        <div>
            <nav>
                <NavLink to="/" exact="true" activeClassName="active"><i class="fas fa-user-alt"></i></NavLink>
                <NavLink to="/chat" activeClassName="active"><i class="fas fa-comment"></i></NavLink>
                <NavLink to="/hashtag" activeClassName="active"><i class="fas fa-hashtag"></i></NavLink>
                <NavLink to="/more" activeClassName="active"><i class="fas fa-ellipsis-h"></i></NavLink>
            </nav>
        </div>
    )
}

export default Navigation;