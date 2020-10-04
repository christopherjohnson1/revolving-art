import React, { useContext, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { CreationsContext } from "../creations/CreationsProvider"
import { RequestContext } from "../requests/RequestProvider"
import { UserContext } from "../users/UserProvider"
import { LocationContext } from "../locations/LocationProvider"

export const ArtistWorksDetail = (props) => {
    const { creations, getCreationById } = useContext(CreationsContext)
    const { getBusinessUser, businessUser } = useContext(UserContext)
    const { getLocations, locations } = useContext(LocationContext)
    const { newRequest } = useContext(RequestContext)


    useEffect(() => {
        const creationId = parseInt(props.match.params.creationId)
        getCreationById(creationId)
    }, [])

    useEffect(() => {
        const currentUser = localStorage.getItem("revolving_art_customer")
        getBusinessUser(currentUser)  // get the user that matches the id of the current user, it will then update business user to that user object
        getLocations()
    }, [])

    const buildNewRequest = (creationName, artistId, creationId) => {
        const locationId = parseInt(businessUser.locationId) // the id of the business the current user is affiliated with
        const selectedLocation = locations.find(l => l.id === locationId) || {} // find the location that matches the id of the location the current user is affiliated with
        newRequest({
            message: `${businessUser.name} wants to feature your piece ${creationName} at ${selectedLocation.name}`,
            artistId: `${artistId}`,
            businessUserId: `${businessUser.id}`,
            creationId: `${creationId}`
        })

    }
            const goBack = () => {
                props.history.push(`/artists/works/${creations.userId}`)
            }

    return (
        <div className="container detailContainer d-flex justify-content-center">
            <Card className="artistWorksDetailCard" key={creations.id}>
            <Card.Img 
            variant="top" src={creations.imageURL} />
            <Card.Body>
            <Card.Title className="text-center">{creations.title}</Card.Title>
            <Card.Text className="text-center">Size: {creations.size}</Card.Text>
            <Card.Text className="text-center">Medium: {creations.medium}</Card.Text>
            <Card.Text className="text-center">Rate: $10/ month</Card.Text>
            <div className="text-center">
                <Button className="mr-4" variant="danger" onClick={evt => {
                evt.preventDefault() 
                goBack()}}>Back</Button>
                <Button 
                variant="primary"
                onClick={evt => {
                 evt.preventDefault()
                 buildNewRequest(creations.title, creations.userId, creations.id)
                 goBack()
                }
                }>Request</Button>
             </div>
            </Card.Body>
            </Card>
        </div>
    )
}