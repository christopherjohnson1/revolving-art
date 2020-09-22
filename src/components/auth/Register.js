import React, { useRef, useState } from "react"
import "./Login.css"

export const Register = (props) => {

    const [artist, setArtist] = useState(null)

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const artistDescription = useRef()
    const profilePhoto = useRef()

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
                            isArtist: artist
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


    const handleChange = (browserEvent) => {
        const newBool = Object.assign({}, artist)
        newBool[browserEvent.target.name] = browserEvent.target.value
        console.log(newBool)
        debugger
        setArtist(newBool)
    }

    
    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Revolving Art</h1>
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
                    <label htmlFor="artistDescription"> Enter Brief Artist Description </label>
                    <input ref={artistDescription} type="text"
                        name="artistDescription"
                        className="form-control"
                        placeholder="Artist Description"
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
                        value={artist}
                        onChange={handleChange}>

                            <option value="null">Select Yes or No</option>
                                <option key={1} value={true}>Yes</option>
                                <option key={2} value={false}>No</option>
                        </select>
                </div>
            </fieldset>
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

