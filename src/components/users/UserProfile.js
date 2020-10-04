import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import Card from "react-bootstrap/Card"
import "./UserProfile.css"

export const UserProfile = (props) => {
    const { getCurrentArtist, currentArtist } = useContext(UserContext)

    
    useEffect(() => {
        const userId = props.match.params.userId
        getCurrentArtist(userId)
    }, [])


    return (
        <>
        <main className="profileContainer">
            <Card className="profileCard">
                <Card.Img className="profilePhoto" variant="top" src={currentArtist.profilePhoto} />
                <Card.Body>
                <Card.Title className="userName text-center">{currentArtist.name}</Card.Title>
                <Card.Text className="text-center">Email address: {currentArtist.email}</Card.Text>
                <Card.Text className="text-center">Password: ************</Card.Text>
                <Card.Text className="text-center">Artist Description: {currentArtist.artistDescription}</Card.Text>
                </Card.Body>
            </Card>
        </main>
        </>
    )
}