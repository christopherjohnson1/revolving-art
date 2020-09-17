import React, { useState } from "react"

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}