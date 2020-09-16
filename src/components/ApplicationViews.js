import React from "react"
import { Route } from "react-router-dom"
import { CreationsProvider } from "./creations/CreationsProvider"
import { CreationsList } from "./creations/CreationsList"

export const ApplicationViews = (props) => {
    return (
        <>
        <CreationsProvider>
            <Route exact path="/">
                <CreationsList />
            </Route>
        </CreationsProvider>

        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("revolving_art_customer")
                    props.history.push("/login")
                }
            } />
        </>
    )
}