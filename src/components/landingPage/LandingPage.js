import React from "react"
import "./LandingPage.css"

export const LandingPage = (props) => {
    const landingImage = "https://res.cloudinary.com/cjflexmaster/image/upload/v1600650789/revolving-art/darya-tryfanava-5gSlzRZE3RQ-unsplash_yf8wsa.jpg"

    return (
        <div className="landingContainer">
            <div className="landingImage"><img src={ landingImage } alt="Small diner with art on the walls" style={{width: '1450px'}} />
            </div>
            <div className="landing-page-text">Welcome to Revolving Art! Created to allow artists to have their work featured at local businesses!
            </div>
            <button onClick={() => props.history.push("/creations")} className="landing-btn">Get Started!</button>
        </div>
    )
}