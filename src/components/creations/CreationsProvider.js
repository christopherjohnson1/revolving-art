import React, { useState } from "react"

export const CreationsContext = React.createContext()

export const CreationsProvider = (props) => {
    const [creations, setCreations] = useState([])

    const getCreations = () => {
        return fetch("http://localhost:8088/creations")
            .then(res => res.json())
            .then(setCreations)
    }

    const addCreation = creation => {
        return fetch("http://localhost:8088/creations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creation)
        })
            .then(getCreations)
    } 

    return (
        <CreationsContext.Provider value={{
            creations, getCreations, addCreation
        }}>
            {props.children}
        </CreationsContext.Provider>
    )
}