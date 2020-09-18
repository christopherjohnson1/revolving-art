import React from "react"
import { Route } from "react-router-dom"
import { CreationsProvider } from "./creations/CreationsProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { CreationsList } from "./creations/CreationsList"
import { Creation } from "./creations/Creation"
import { CreationForm } from "./creations/CreationForm"

export const ApplicationViews = (props) => {
    return (
        <>
        <CreationsProvider>
            <LocationProvider>
                <Route exact path="/creations" render={(props) => {
                    return <CreationsList history={props.history} />
                }} />
            </LocationProvider>
        </CreationsProvider>

        <CreationsProvider>
            <Route path="/creations/add" render={(props) => {
                return <CreationForm history={props.history} />
            }} />
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