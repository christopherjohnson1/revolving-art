import React, { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [artistUsers, setArtistUsers] = useState([])
    const [currentArtist, setCurrentArtist] = useState([])
    const [businessUser, setBusinessUser] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }
    
    const getArtistUsers = () => {
        return fetch("http://localhost:8088/users?isArtist=true")
            .then(res => res.json())
            .then(setArtistUsers)
    }

    const getCurrentArtist = (id) => {
        return fetch(`http://localhost:8088/users/${id}`)
            .then(res => res.json())
            .then(setCurrentArtist)
    }

    const getBusinessUser = (id) => {
        return fetch(`http://localhost:8088/users/${id}`)
            .then(res => res.json())
            .then(setBusinessUser)
    }

    return (
        <UserContext.Provider value={{
            users,
            getUsers,
            artistUsers,
            getArtistUsers,
            currentArtist,
            getCurrentArtist,
            businessUser,
            getBusinessUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}