import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./UserProfile.css"

export const UserProfile = (props) => {
    const { getCurrentArtist, currentArtist } = useContext(UserContext)

    
    useEffect(() => {
        const userId = props.match.params.userId
        getCurrentArtist(userId)
    }, [])

    const isArtist = currentArtist.isArtist


    return (
        <>
        <main className="profileContainer">
            <Card className="profileCard">
                <Card.Img className="profilePhoto" variant="top" src={currentArtist.profilePhoto} />
                <Card.Body>
                <Card.Title className="userName">{currentArtist.name}</Card.Title>
                <Card.Text>Email address: {currentArtist.email}</Card.Text>
                <Card.Text>Password: ************</Card.Text>
                <Card.Text>Artist Description: {currentArtist.artistDescription}</Card.Text>
                <Button onClick={() => props.history.push(`/requests/${currentArtist.id}`)}> Feature Requests</Button>
                </Card.Body>
            </Card>
        </main>
        </>
    )
}