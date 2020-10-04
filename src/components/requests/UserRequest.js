import React from "react"
import Card from "react-bootstrap/Card"


export const UserRequest = ({ userRequest }) => {

    return (
        <Card className="request" key={userRequest.id} style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Text className="text-center">{userRequest.message}</Card.Text>
            <Card.Text className="text-center">Call (615) 679-9013 to make arrangements!</Card.Text>
            </Card.Body>
        </Card>
    )
}