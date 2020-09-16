import React from "react"

export const Creation = ({ creation }) => (
    <section key={creation.id} classname="creation">
        <div>
            <div><img src={creation.imageURL} alt="" /></div>
            <div>Title: {creation.title}</div>
            <div>Size: {creation.size}</div>
            <div>Medium: {creation.medium}</div>
            <div>Location: {creation.locationId}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </section>
)