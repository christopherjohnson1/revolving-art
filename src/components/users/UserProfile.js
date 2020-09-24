import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import Button from "react-bootstrap/Button"
import "./UserProfile.css"

export const UserProfile = (props) => {
    const { getCurrentArtist, currentArtist } = useContext(UserContext)

    
    useEffect(() => {
        const userId = props.match.params.userId
        getCurrentArtist(userId)
    })

    return (
        <>
        <main className="profileContainer">
        <img className="profilePhoto" src={currentArtist.profilePhoto} alt="" />
        <h1 className="userName">{currentArtist.name}</h1>
        <Button onClick={() => props.history.push(`/requests/${currentArtist.id}`)}>Requests</Button>
        </main>
        </>
    )
}