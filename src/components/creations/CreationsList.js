import React, { useContext, useEffect } from "react"
import { CreationsContext } from "./CreationsProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Creation } from "./Creation"
import Button from "react-bootstrap/Button"
import "./Creations.css"

export const CreationsList = (props) => {
    const { getCreations, creations } = useContext(CreationsContext)
    const { getLocations, locations } = useContext(LocationContext)

    // Initialization effect hook -> Go get creations data
    useEffect(() => {
        getCreations()
        .then(getLocations)
    }, [])

    return (
        <>
        <Button onClick={() => props.history.push("/creations/add")} variant="success">Add a new creation</Button>
        <main className="creationContainer">
            <div className="creationsHeading">
                <h1>My Collection</h1>
            </div>
            <div className="creations">
                {
                    creations.map(creation => {
                        const location = locations.find(loc => loc.id === creation.locationId) || {}

                        return <Creation key={creation.id} creation={creation} location={location} />
                    })
                }
            </div>
        </main>
        </>
    )
}