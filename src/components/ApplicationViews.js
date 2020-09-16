import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = (props) => {
    return (
        <>
        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("revolving_art_customer")
                    props.history.push("/login")
                }
            } />
        </>
    )
}