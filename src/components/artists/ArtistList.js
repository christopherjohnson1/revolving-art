import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { Artist } from "./Artist"

export const ArtistList = (props) => {
    const { getArtistUsers, artistUsers } = useContext(UserContext)
    
    // get the users that are artists from API
    useEffect(() => {
        getArtistUsers()
    }, [])

    return (
        <>
        <main className="artistContainer">
            <div className="artistHeading">
                <h1 className="text-center">Available Artists</h1>
            </div>
            <div className="artists">
                {
                    artistUsers.map(artistUser => {
                        return <Artist key={artistUser.id} props={props} artistUser={artistUser}  />
                    })
                }
            </div>
        </main>
        </>
        ) 
}