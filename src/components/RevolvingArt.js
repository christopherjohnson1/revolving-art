import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { UserProvider } from "./users/UserProvider"
import "./RevolvingArt.css"

export const RevolvingArt = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("revolving_art_customer")) {
                return (
                    <>
                    <UserProvider>
                        <Route render={props => <NavBar {...props} />} />
                    </UserProvider>
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)