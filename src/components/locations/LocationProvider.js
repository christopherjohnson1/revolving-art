import React, { useState } from "react"

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])
    const [userLocation, setUserLocation] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const getUserLocation = (id) => {
        return fetch(`http://localhost:8088/locations/${id}`)
            .then(res => res.json())
            .then(setUserLocation)
    }

    return (
        <LocationContext.Provider value={{
            locations,
            getLocations,
            userLocation,
            getUserLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}