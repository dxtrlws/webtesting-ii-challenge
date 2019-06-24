import React from 'react'

export default function Display(props) {
    return (
        <div>
            <p>Fouls: {props.fouls}</p>
            <p>Balls: {props.balls}</p>
            <p>strikes: {props.strikes}</p>
        </div>
    )
}

