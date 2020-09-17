import React, { useContext, useRef } from "react"
import { CreationsContext } from "./CreationsProvider"

export const CreationForm = (props) => {
    const { addCreation } = useContext(CreationsContext)

    const title = useRef(null)
    const size = useRef(null)
    const medium = useRef(null)

    const addToCreations = () => {
        const newCreation = {
            title: title.current.value,
            size: size.current.value,
            medium: medium.current.value
        }

        addCreation(newCreation).then(() => {
            props.history.push("/creations")
        })
    }


    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="creationTitle">Creation Title: </label>
                    <input type="text" id="creationTitle" ref={title} required autoFocus className="form-control" placeholder="Creation Title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Size: </label>
                    <input type="text" id="size" ref={size} required autoFocus className="form-control" placeholder="Size of creation" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Medium: </label>
                    <input type="text" id="medium" ref={medium} required autoFocus className="form-control" placeholder="Medium used for creation" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    addToCreations()
                }}
                className="btn btn-primary">
                Submit Creation
            </button>
        </form>
    )
}
