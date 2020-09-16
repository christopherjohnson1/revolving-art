import React, { useState } from "react"

export const CreationsContext = React.createContext()

export const CreationsProvider = (props) => {
    const [creations, setCreations] = useState([])

    const getCreations = () => {
        return fetch("http://localhost:8088/creations")
            .then(res => res.json())
            .then(setCreations)
    }

    return (
        <CreationsContext.Provider value={{
            creations, getCreations
        }}>
            {props.children}
        </CreationsContext.Provider>
    )
}