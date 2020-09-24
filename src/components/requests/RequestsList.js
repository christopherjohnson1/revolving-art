import React, { useContext, useEffect } from "react"
import { RequestContext } from "./RequestProvider"
import { CreationsContext } from "../creations/CreationsProvider"
import { UserRequest } from "./UserRequest"

export const RequestsList = (props) => {
    const { getUserRequests, userRequests } = useContext(RequestContext)
    const { getCreations, creations } = useContext(CreationsContext)


    useEffect(() => {
        const userId = props.match.params.userId
        getUserRequests(userId)
    }, [])
    
    useEffect(() => {
        getCreations()
    }, [])

    return (
        <>
    <main className="requestContainer">
        <div className="requestHeading"><h1>Requests for feature!</h1></div>
        <div className="requests">
            {
                userRequests.map(userRequest => {
                    console.log(creations)
                    const creation = creations.find(c => c.id === userRequest.creationId) || {}
                    return <UserRequest key={userRequest.id} props={props} creation={creation} userRequest={userRequest} />
                })
            }
        </div>
    </main>
    </>    
    )
}