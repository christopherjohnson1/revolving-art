import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./landingPage/LandingPage";
import { CreationsProvider } from "./creations/CreationsProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { CreationsList } from "./creations/CreationsList"
import { CreationForm } from "./creations/CreationForm"

export const ApplicationViews = (props) => {

    return (
        <>
        <Route exact path="/">
            <LandingPage />
        </Route>

        <CreationsProvider>
            <LocationProvider>
                <Route exact path="/creations" render={(props) => {
                    return <CreationsList history={props.history} />
                }} />
            </LocationProvider>
        </CreationsProvider>

        <CreationsProvider>
            <LocationProvider>
                <Route path="/creations/add" render={(props) => {
                    return <CreationForm {...props} />
                }} />
            </LocationProvider>
        </CreationsProvider>
        
        <CreationsProvider>
            <LocationProvider>
            <Route path="/creations/edit/:creationId(\d+)" render={(props) => {
                return <CreationForm {...props} />
            }} />
            </LocationProvider>
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