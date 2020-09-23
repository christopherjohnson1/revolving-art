import React, { useRef, useState, useContext, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import "./Login.css"

export const Register = (props) => {
    const [artist, setArtist] = useState(true)
    const [locationId, setLocationId] = useState(0)

    const { locations, getLocations } = useContext(LocationContext)

    const handleControlledInputChange = (event) => {                // to set locationId
        const newLocationId = Object.assign({}, locationId)         // Create a copy
        newLocationId[event.target.name] = event.target.value     // Modify Copy
        setLocationId(newLocationId)                                // Set copy as new state
    }

    // get locations from API
    useEffect(() => {
        getLocations()
    }, [])

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const artistDescription = useRef("") 
    const profilePhoto = useRef()

    // is the user an artist? boolean
    const businessMode = artist.isArtist


    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            artistDescription: artistDescription.current.value,
                            profilePhoto: profilePhoto.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            isArtist: artist.isArtist,
                            locationId: locationId.locationId
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("revolving_art_customer", createdUser.id)
                                props.history.push("/")
                            }
                        })
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    // handles onChange of isArtist from select dropdown
    const handleChange = (browserEvent) => {
        const newBool = Object.assign({}, artist)
        newBool[browserEvent.target.name] = JSON.parse(browserEvent.target.value)
        setArtist(newBool)
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register for Revolving Art!</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="profilePhoto"> Enter the URL for you profile photo </label>
                    <input ref={profilePhoto} type="text"
                        name="profilePhoto"
                        className="form-control"
                        placeholder="Image URL"
                        required />
                </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="isArtist">Are you an artist? </label>
                        <select name="isArtist" className="form-control"
                            value={artist.isArtist}
                            onChange={handleChange}>
                                <option value={null}>Select Yes or No</option>
                                <option key={1} value={true}>Yes</option>
                                <option key={2} value={false}>No</option>
                        </select>
                </div>
                </fieldset>
                {/* if user is artist render field for artist, if not render location select */}
                {businessMode ? (
                <fieldset>
                    <label htmlFor="artistDescription"> Enter Brief Artist Description </label>
                    <input ref={artistDescription} type="text"
                        name="artistDescription"
                        className="form-control"
                        placeholder="Artist Description"
                        required />
                </fieldset>
                ) : (
                    <fieldset>
                    <div className="form-group">
                    <label htmlFor="locationId">What business are you affiliated with? </label>
                        <select name="locationId" className="form-control"
                        proptype="int"
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
                )}
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

