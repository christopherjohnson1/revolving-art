import React, { useContext, useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { RequestContext } from "../requests/RequestProvider"
import { UserContext } from "../users/UserProvider"
import { LocationContext } from "../locations/LocationProvider"

export const ArtistWorksList = ({ creation, props }) => {
    const { newRequest } = useContext(RequestContext)
    const { getBusinessUser, businessUser } = useContext(UserContext)
    const { getLocations, locations } = useContext(LocationContext)

    useEffect(() => {
        const currentUser = localStorage.getItem("revolving_art_customer")
        getBusinessUser(currentUser)
        getLocations()
    }, [])
    
    
    const buildNewRequest = (creationName) => {
        const locationId = parseInt(businessUser.locationId)
        const selectedLocation = locations.find(l => l.id === locationId) || {}
        newRequest({
            message: `${businessUser.name} wants to feature ${creationName} at ${selectedLocation.name}`
        })
    }


    return (
        <Card className="creation" key={creation.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={creation.imageURL} />
            <Card.Body>
            <Card.Title>{creation.title}</Card.Title>
            <Card.Text>Size: {creation.size}</Card.Text>
            <Card.Text>Medium: {creation.medium}</Card.Text>
            <Button 
             variant="primary"
             onClick={evt => {
                 evt.preventDefault()
                 buildNewRequest(creation.title)
             }}>Request</Button>
            </Card.Body>
        </Card>
)}