import React, { useContext } from "react"
import { CreationsContext } from "./CreationsProvider"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const Creation = ({ creation, location, props }) => {
    const { removeCreation } = useContext(CreationsContext)

    return (
        <Card className="creation" key={creation.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={creation.imageURL} />
            <Card.Body>
            <Card.Title>{creation.title}</Card.Title>
            <Card.Text>Size: {creation.size}</Card.Text>
            <Card.Text>Medium: {creation.medium}</Card.Text>
            <Card.Text>Location: {location.name}</Card.Text>
            <Button 
            onClick={() => {props.history.push(`/creations/edit/${creation.id}`)}}
             variant="primary">Edit</Button>
            <Button
            onClick={
                () => 
                    removeCreation(creation.id)
                    .then(() => props.history.go(0))
            }
             variant="danger">Delete</Button>
            </Card.Body>
        </Card>
)}
