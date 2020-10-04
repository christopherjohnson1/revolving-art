import React, { useContext, useEffect } from "react"
import { CreationsContext } from "../creations/CreationsProvider"
import { UserContext } from "../users/UserProvider"
import { ArtistWorksList } from "./ArtistWorksList"
import Button from "react-bootstrap/Button"

export const ArtistWorks = (props) => {
    const { getUserCreations, userCreations } = useContext(CreationsContext)
    const { getCurrentArtist, currentArtist } = useContext(UserContext)

    useEffect(() => {
        const artistId = props.match.params.artistId
        getUserCreations(artistId)  // Get the creations from API that match the artistId
        getCurrentArtist(artistId)  // Get the current artist to display their name as the heading
    }, [])

    return (
        <>
        <main>
            <div className="artistWorksHeading d-flex flex-column justify-content-center">
                <h1 className="text-center">{currentArtist.name}'s Collection</h1><br />
                <p className="text-center">Click an image to see details</p>
            </div>
            <div className="artistWorksContainer container-fluid">
                {
                    userCreations.map(creation => {
                        return <ArtistWorksList key={creation.id} props={props} creation={creation} />
                    })
                }
            </div>
                <div className="d-flex justify-content-center"><Button className="my-4" variant="danger" onClick={() => {props.history.push("/artists")}}>Go Back</Button></div>
        </main>
        </>
    )
}