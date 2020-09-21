import React from "react"

export const LandingPage = () => {
    const landingImage = "https://res.cloudinary.com/cjflexmaster/image/upload/v1600650789/revolving-art/darya-tryfanava-5gSlzRZE3RQ-unsplash_yf8wsa.jpg"

    return (
        <div>
            <h1 className="text-center py-3">Welcome to Revolving Art</h1>
            <img src={ landingImage } alt="" />
        </div>
    )
}