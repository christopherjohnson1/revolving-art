import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


export const UserRequest = ({ userRequest, props }) => {

    return (
        <Card className="request" key={userRequest.id} style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text>{userRequest.message}</Card.Text>
            <Button
            variant="danger">Deny</Button>
            <Button variant="success">Approve</Button>
            </Card.Body>
        </Card>
    )
}