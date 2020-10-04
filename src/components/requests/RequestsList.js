import React, { useContext, useEffect } from "react"
import { RequestContext } from "./RequestProvider"
import { UserRequest } from "./UserRequest"
import Button from "react-bootstrap/Button"
import "./RequestsList.css"

export const RequestsList = (props) => {
    const { getUserRequests, userRequests } = useContext(RequestContext)


    useEffect(() => {
        const userId = props.match.params.userId
        getUserRequests(userId)
    }, [])
    
    return (
        <>
        <main className="requestContainer">
        <div className="requests">
        <div className="requestHeading py-3 text-center">
            <h1>Requests for feature!</h1>
            <Button
            variant="danger"
            onClick={() => {props.history.push("/creations")}}>Go Back</Button>
            </div>
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