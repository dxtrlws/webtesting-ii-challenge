import React from 'react'

export default function Display({fouls, balls, strikes}) {
    return (
        <div>
            <p>Fouls: {fouls}</p>
            <p>Balls: {balls}</p>
            <p>strikes: {strikes}</p>
        </div>
    )
}

