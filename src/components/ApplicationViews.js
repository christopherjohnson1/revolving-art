import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./landingPage/LandingPage"
import { CreationsProvider } from "./creations/CreationsProvider"
import { CreationsList } from "./creations/CreationsList"
import { CreationForm } from "./creations/CreationForm"
import { LocationProvider } from "./locations/LocationProvider"
import { UserProvider } from "./users/UserProvider"
import { ArtistList } from "./artists/ArtistList"
import { ArtistWorks } from "./artists/ArtistWorks"
import { ArtistWorksDetail } from "./artists/ArtistWorksDetail"
import { RequestProvider } from "./requests/RequestProvider"
import { RequestsList } from "./requests/RequestsList"
import { UserProfile } from "./users/UserProfile"

export const ApplicationViews = (props) => {

    return (
        <>
        {/* Begin Landing Page */}
        <Route exact path="/" render={(props) => {
            return <LandingPage history={props.history} />
        }}>
        </Route>
        {/* End Landing Page */}

        {/* Begin Creations Section */}
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
        {/* End Creations Section */}

        {/* Begin Artist Section */}
        <UserProvider>
            <Route exact path="/artists" render={(props) => {
                return <ArtistList {...props} />
            }} />
        </UserProvider>

        <CreationsProvider>
            <UserProvider>
                <RequestProvider>
                    <LocationProvider>

                    <Route path="/artists/works/:artistId(\d+)" render={(props) => {
                        return <ArtistWorks {...props} />
                    }} />

                    <Route path="/artists/works/detail/:creationId(\d+)" render={(props) => {
                        return <ArtistWorksDetail {...props} />
                    }} />
                    </LocationProvider>
                </RequestProvider>
            </UserProvider>
        </CreationsProvider>
        {/* End Artist Section */}

        {/* Begin Profile Section */}
                    <UserProvider>
                        <RequestProvider>
                            <Route path="/profile/:userId(\d+)" render={(props) => {
                                return <UserProfile {...props} />
                            }} />
                        </RequestProvider>
                    </UserProvider>

                    <UserProvider>
                        <RequestProvider>
                            <CreationsProvider>
                            <Route path="/requests/:userId(\d+)" render={(props) => {
                                return <RequestsList {...props} />
                            }} />
                            </CreationsProvider>
                        </RequestProvider>
                    </UserProvider>

        {/* End Profile Section */}

        {/* Begin Logout */}
        <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("revolving_art_customer")
                    props.history.push("/login")
                }
            } />
        {/* End Logout */}
        </>
    )
}