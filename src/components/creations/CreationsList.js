import React, { useContext, useEffect } from "react"
import { CreationsContext } from "./CreationsProvider"
import { Creation } from "./Creation"

export const CreationsList = () => {
    const { getCreations, creations } = useContext(CreationsContext)

    // Initialization effect hook -> Go get creations data
    useEffect(() => {
        getCreations()
    }, [])

    return (
        <main className="creationContainer">
            <h1>My Collection</h1>
            <div className="creations">
                {
                    creations.map(creation => {
                        return <Creation key={creation.id} creation={creation} />
                    })
                }
            </div>
        </main>
    )
}