import React, { useContext, useEffect } from "react"
import "./LandingPage.css"
import { UserContext } from "../users/UserProvider"

export const LandingPage = (props) => {
    const { users, getUsers } = useContext(UserContext)

    const landingImage = "https://res.cloudinary.com/cjflexmaster/image/upload/v1600650789/revolving-art/darya-tryfanava-5gSlzRZE3RQ-unsplash_yf8wsa.jpg"

    useEffect(() => {
        getUsers()
    }, [])

    const currentUser = users.find(usr => usr.id === parseInt(localStorage.getItem("revolving_art_customer"))) || {}

    return (
        <div className="landingContainer">
            <div className="landingImage"><img src={ landingImage } alt="Small diner with art on the walls" style={{width: '1450px'}} />
            </div>
            <div className="landing-page-text">Welcome to Revolving Art! Created to allow artists to have their work featured at local businesses!
            </div>
            {/* If user is artist Get Started takes them to their creations page -- 
                If they are a business user it will take them to the available artists page */}
            {currentUser.isArtist ? (<button onClick={() => props.history.push("/creations")} className="landing-btn">Get Started!</button>) : (
                <button onClick={() => props.history.push("/artists")} className="landing-btn">Get Started!</button>
            )}
            
        </div>
    )
}