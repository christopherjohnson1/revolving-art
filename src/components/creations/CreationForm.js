import React, { useContext, useRef, useState } from "react"
import { CreationsContext } from "./CreationsProvider"
import Button from "react-bootstrap/Button"

export const CreationForm = (props) => {
    const { addCreation } = useContext(CreationsContext)
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const title = useRef(null)
    const size = useRef(null)
    const medium = useRef(null)
    const imageURL = useRef(null)

    const addToCreations = () => {
        const newCreation = {
            title: title.current.value,
            size: size.current.value,
            medium: medium.current.value,
            imageURL: image
        }
        addCreation(newCreation).then(() => {
            props.history.push("/creations")
        })
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
                <div className="form-group">
                    <label htmlFor="creationImage">Creation Image: </label>
                    <input type="file" 
                            name="file" 
                            id="creationImage" 
                            ref={imageURL} required autoFocus 
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
            <Button onClick={() => props.history.push("/creations")} variant="danger">Cancel</Button>
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
