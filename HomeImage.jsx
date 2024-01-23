import React from 'react'
import IMAGE from "./assets/homepageimg.png"

const HomeImage = () => {
    return (
        <div className='homeimage'>

            <img src={IMAGE} alt = ""/>
            <p>Book your </p>
            <p>Favorite Time</p> 

        </div>
    )
}

export default HomeImage