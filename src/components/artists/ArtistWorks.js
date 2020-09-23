import React, { useContext, useEffect } from "react"
import { CreationsContext } from "../creations/CreationsProvider"
import { UserContext } from "../users/UserProvider"
import { ArtistWorksList } from "./ArtistWorksList"

export const ArtistWorks = (props) => {
    const { getUserCreations, userCreations } = useContext(CreationsContext)
    const { getCurrentArtist, currentArtist } = useContext(UserContext)

    useEffect(() => {
        const artistId = props.match.params.artistId
        getUserCreations(artistId)
        getCurrentArtist(artistId)
    }, [])
    
    return (
        <>
        <main className="creationContainer">
            <div className="creationsHeading">{
            }
                <h1 className="text-center">{currentArtist.name}'s Works</h1>
            </div>
            <div className="creations">
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