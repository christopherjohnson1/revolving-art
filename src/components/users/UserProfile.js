import React, { useContext, useEffect } from "react"

export const UserProfile = (props) => {
    const userId = props.match.params.userId


    return (
        <>
        <h1>Profile View for userId: {userId}</h1>
        </>
    )
}