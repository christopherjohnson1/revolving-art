import React, { useState } from "react"

export const RequestContext = React.createContext()

export const RequestProvider = (props) => {
    const [requests, setRequests] = useState([])
    const [userRequests, setUserRequests] =useState([])

    const getRequests = () => {
        return fetch("http://localhost:8088/requests")
            .then(res => res.json())
            .then(setRequests)
    }

    const newRequest = request => {
        return fetch("http://localhost:8088/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        })
        .then(getRequests)
    }

    const getUserRequests = (userId) => {
        return fetch(`http://localhost:8088/requests?artistId=${userId}`)
            .then(res => res.json())
            .then(setUserRequests)
    }

    const removeRequest = (requestId) => {
        return fetch(`http://localhost:8088/requests/${requestId}`, {
            method: "DELETE"
        })
            .then(getRequests)

    }

    return (
        <RequestContext.Provider value={{
            requests,
            getRequests,
            newRequest,
            getUserRequests,
            userRequests,
            removeRequest
        }}>
            {props.children}
        </RequestContext.Provider>
    )
}