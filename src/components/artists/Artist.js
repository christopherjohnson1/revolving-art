import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const Artist = ({ artistUser, props }) => { 
    return (
        <Card className="artist" key={artistUser.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={artistUser.profilePhoto} />
            <Card.Body>
            <Card.Title className="text-center">{artistUser.name}</Card.Title>
            <Card.Text className="text-center">{artistUser.artistDescription}</Card.Text>
            {/* When the user clicks the view collection button take me to a new view that lists their collection */}
            <div className="text-center mt-4">
            <Button
            onClick={() => {props.history.push(`/artists/works/${artistUser.id}`)}}>View Collection</Button>
            </div>
            </Card.Body>
        </Card>
    )
}