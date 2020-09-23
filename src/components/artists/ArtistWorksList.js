import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const ArtistWorksList = ({ creation, props }) => {

    return (
        <Card className="creation" key={creation.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={creation.imageURL} />
            <Card.Body>
            <Card.Title>{creation.title}</Card.Title>
            <Card.Text>Size: {creation.size} (size in inches)</Card.Text>
            <Card.Text>Medium: {creation.medium}</Card.Text>
            <Button 
             variant="primary">Request</Button>
            </Card.Body>
        </Card>
)}