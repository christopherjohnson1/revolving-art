import React, { useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { Artist } from "./Artist"
import "./Artist.css"

export const ArtistList = (props) => {
    const { getArtistUsers, artistUsers } = useContext(UserContext)
    
    // get the users that are artists from API
    useEffect(() => {
        getArtistUsers()  //go get the users from the API that are artists (isArtist: true)
    }, [])

    return (
        <>
        <main>
            <div className="artistHeading">
                <h1 className="text-center">Available Artists</h1>
            </div>
            <div className="artistsContainer container-fluid">
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