import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const Artist = ({ artistUser, props }) => { 
    return (
        <Card className="artist" key={artistUser.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={artistUser.profilePhoto} />
            <Card.Body>
            <Card.Title>{artistUser.name}</Card.Title>
            <Card.Text>{artistUser.artistDescription}</Card.Text>
            {/* When the user clicks the view collection button take me to a new view that lists their collection */}
            <Button
            onClick={() => {props.history.push(`/artists/works/${artistUser.id}`)}}>View Collection</Button>
            </Card.Body>
        </Card>
    )
}