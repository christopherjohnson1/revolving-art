import React, { useContext, useEffect } from "react"
import { CreationsContext } from "../creations/CreationsProvider"
import { UserContext } from "../users/UserProvider"
import { ArtistWorksList } from "./ArtistWorksList"

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
            <div className="creationsHeading">{
            }
                <h1 className="text-center">{currentArtist.name}'s Collection</h1>
            </div>
            <div className="creationContainer">
                {
                    userCreations.map(creation => {
                        return <ArtistWorksList key={creation.id} props={props} creation={creation} />
                    })
                }
            </div>
        </main>
        </>
    )
}