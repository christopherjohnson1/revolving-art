import React, { useState } from "react"

export const CreationsContext = React.createContext()

export const CreationsProvider = (props) => {
    const [creations, setCreations] = useState([])
    const [userCreations, setUserCreations] = useState([])

    const getUserCreations = (userId) => {
        return fetch(`http://localhost:8088/creations?userId=${userId}`)
            .then(res => res.json())
            .then(setUserCreations)
    }

    const getCreations = () => {
        return fetch("http://localhost:8088/creations")
            .then(res => res.json())
            .then(setCreations)
    }

    const getCreationById = (creationId) => {
        return fetch(`http://localhost:8088/creations/${creationId}`)
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

    const removeCreation = (creationId) => {
        return fetch(`http://localhost:8088/creations/${creationId}`, {
            method: "DELETE"
        })
            .then(getCreations)
    }

    const updateCreation = creation => {
        return fetch(`http://localhost:8088/creations/${creation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creation)
        })
            .then(getCreations)
    }

    return (
        <CreationsContext.Provider value={{
            creations, 
            getCreations, 
            addCreation, 
            removeCreation, 
            updateCreation,
            getUserCreations,
            userCreations,
            getCreationById
        }}>
            {props.children}
        </CreationsContext.Provider>
    )
}