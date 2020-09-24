import React, { useContext, useEffect } from "react"
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
        getBusinessUser(currentUser)  // get the user that matches the id of the current user, it will then update business user to that user object
        getLocations()
    }, [])
    
    
    const buildNewRequest = (creationName, artistId) => {
        const locationId = parseInt(businessUser.locationId) // the id of the business the current user is affiliated with
        const selectedLocation = locations.find(l => l.id === locationId) || {} // find the location that matches the id of the location the current user is affiliated with
        newRequest({
            message: `${businessUser.name} wants to feature ${creationName} at ${selectedLocation.name}`,
            artistId: `${artistId}`,
            businessUserId: `${businessUser.id}`
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
                 buildNewRequest(creation.title, creation.userId)
             }}>Request</Button>
            </Card.Body>
        </Card>
)}