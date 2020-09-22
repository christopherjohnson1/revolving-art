import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import { UserContext } from "../users/UserProvider"


export const NavBar = (props) => {
    const { users, getUsers  } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])
    
    const currentUser = users.find(usr => usr.id === parseInt(localStorage.getItem("revolving_art_customer"))) || {}
    return (
        <>  
            {currentUser.isArtist ? (
                <Navbar bg="dark" variant="dark" className="d-flex justify-content-end">
                    <ul className="navbar__actual">
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/">Revolving Art</Link>
                        </li>
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/creations">Creations</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </Navbar>
                ) : (
                    <Navbar bg="dark" variant="dark" className="d-flex justify-content-end">
                    <ul className="navbar__actual">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/">Revolving Art</Link>
                    </li>
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/creations">Bizness</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/logout">Logout</Link>
                    </li>
                </ul>
            </Navbar>
                )}

                
        </>
    )
}