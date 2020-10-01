import React from "react"
import Card from "react-bootstrap/Card"
// import { RequestContext } from "../requests/RequestProvider"
// import { UserContext } from "../users/UserProvider"
// import { LocationContext } from "../locations/LocationProvider"

export const ArtistWorksList = ({ creation, props }) => {

    return (
        <Card className=".artistWorksCard p-3 m-2" key={creation.id} style={{ width: '25rem' }}>
            <Card.Img 
            className="artistWorksImg"
            onClick={() => {props.history.push(`/artists/works/detail/${creation.id}`)}}
            variant="top" src={creation.imageURL} />
        </Card>
)}