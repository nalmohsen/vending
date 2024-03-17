import React from "react";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/chocolate">
                Chocolate
            </NavLink>
        </nav>
    );
}

export default NavBar;