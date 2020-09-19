import React, { useContext, useEffect, useState } from "react"
import { CreationsContext } from "./CreationsProvider"
import { LocationContext } from "../locations/LocationProvider"
import Button from "react-bootstrap/Button"

export const CreationForm = (props) => {
    const { addCreation, updateCreation, getCreations, creations } = useContext(CreationsContext)
    const { locations, getLocations } = useContext(LocationContext)

    // states below are for cloudinary image upload
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    // following state is for component state
    const [creation, setCreation] = useState({})

    // is there a URL parameter???
    const editMode = props.match.params.hasOwnProperty("creationId") // true or false 

    const handleControlledInputChange = (event) => {
        const newCreation = Object.assign({}, creation)
        console.log(creation)         // Create a copy
        newCreation[event.target.name] = event.target.value     // Modify Copy
        setCreation(newCreation)                                // Set copy as new state
    }

    const getCreationInEditMode = () => {
        if (editMode) {
            const creationId = parseInt(props.match.params.creationId)
            const selectedCreation = creations.find(c => c.id === creationId) || {}
            setCreation(selectedCreation)
        }
    }
    // Get Creations from API when component initializes
    useEffect(() => {
        getCreations()
        getLocations()
    }, [])

    useEffect(() => {
        getCreationInEditMode()
    }, [creations])


    const constructNewCreation = () => {
        if (editMode) {
            updateCreation({
                id: creation.id,
                title: creation.title,
                size: creation.size,
                medium: creation.medium,
                imageURL: image,
                locationId: parseInt(creation.locationId)
            })
                .then(() => props.history.push("/creations"))
        } else {
            addCreation({
                title: creation.title,
                size: creation.size,
                medium: creation.medium,
                imageURL: image,
                locationId: parseInt(creation.locationId)
            })
                .then(() => props.history.push("/creations"))
        }
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'revolving-art')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/cjflexmaster/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <form>
            <fieldset>
                <h2 className="creationForm__title">{editMode ? "Update Creation" : "New Creation"}</h2>
                <div className="form-group">
                    <label htmlFor="creationImage">Creation Image: </label>
                    <input type="file" 
                            name="file" 
                            id="creationImage" 
                            required autoFocus 
                            className="form-control" 
                            placeholder="Upload an image"
                            onChange={uploadImage} />
                            {loading ? (
                                <h3>Loading...</h3>
                            ) : (
                                <img src={image} style={{width: '300px'}} alt="" />
                            )}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="creationTitle">Creation Title: </label>
                    <input type="text" name="title" id="creationTitle" required autoFocus className="form-control" 
                    placeholder="Creation Title"
                    defaultValue={creation.title}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Size: </label>
                    <input type="text" name="size" id="size" required autoFocus className="form-control" 
                    placeholder="Size of creation"
                    defaultValue={creation.size}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationId">Location: </label>
                    <select name="locationId" className="form-control"
                        proptype="int"
                        value={creation.locationId}
                        onChange={handleControlledInputChange}>

                            <option value="0">Select a location</option>
                            {locations.map(e => (
                                <option key={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Medium: </label>
                    <input type="text" name="medium" id="medium" required autoFocus className="form-control" 
                    placeholder="Medium used for creation"
                    defaultValue={creation.medium}
                    onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <Button onClick={() => props.history.push("/creations")} className="btn btn-primary ml-3" variant="danger">Cancel</Button>
            <Button type="submit" variant="success"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewCreation()
                }}
                className="btn btn-primary ml-3">
                {editMode ? "Save Updates" : "Save New Creation"}
            </Button>
        </form>
    )
}
