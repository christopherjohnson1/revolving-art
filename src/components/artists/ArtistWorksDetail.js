import React, { useContext, useEffect, useState } from "react"
import { CreationsContext } from "../creations/CreationsProvider"

export const ArtistWorksDetail = (props) => {
    const { creations, getCreationById } = useContext(CreationsContext)

    useEffect(() => {
        const creationId = parseInt(props.match.params.creationId)
        getCreationById(creationId)
    }, [])

    console.log(creations)
    return <h1>Creation detail will go here!</h1>
}