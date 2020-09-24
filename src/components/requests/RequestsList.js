import React, { useContext, useEffect } from "react"
import { RequestContext } from "./RequestProvider"
import { UserRequest } from "./UserRequest"

export const RequestsList = (props) => {
    const { getUserRequests, userRequests } = useContext(RequestContext)


    useEffect(() => {
        const userId = props.match.params.userId
        getUserRequests(userId)
    }, [])
    
    return (
        <>
    <main className="requestContainer">
        <div className="requestHeading"><h1>Requests for feature!</h1></div>
        <div className="requests">
            {
                userRequests.map(userRequest => {
                    return <UserRequest key={userRequest.id} props={props} userRequest={userRequest} />
                })
            }
        </div>
    </main>
    </>    
    )
}