import React from 'react'
import "./Card.css"

const Card = ({pName, cID, imgURL}) => {
    return (
        <div id = "Card">
            <h1 className = "headings">{pName} - {cID}</h1>
            <img src = {imgURL} alt = {pName}/>
        </div>
    )
}

export default Card;