import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'

export const NavBar = (props) => {
    return (
        <>
            <Navbar bg="light" variant="light" className="d-flex justify-content-end">
                <ul className="navbar__actual">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/">Revolving Art</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/signup">Sign up</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/login">Log in</Link>
                    </li>
                </ul>
            </Navbar>
        </>
    )
}