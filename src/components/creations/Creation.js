import React, { useContext } from "react"
import { CreationsContext } from "./CreationsProvider"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const Creation = ({ creation, location }) => {
    const { removeCreation } = useContext(CreationsContext)

    return (
        <Card className="creation" key={creation.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={creation.imageURL} />
            <Card.Body>
            <Card.Title>{creation.title}</Card.Title>
            <Card.Text>Size: {creation.size} (size in inches)</Card.Text>
            <Card.Text>Medium: {creation.medium}</Card.Text>
            <Card.Text>Location: {location.name}</Card.Text>
            <Button variant="primary">Edit</Button>
            <Button
            onClick={
                () => removeCreation(creation.id)
            }
             variant="danger">Delete</Button>
            </Card.Body>
        </Card>
)}
