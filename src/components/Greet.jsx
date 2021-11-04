import React from 'react'

export default function Greet(props) {
    return (
        <div  className="container card p-3 m-2 register-container ">
            <h3>Your Name is {props.name}</h3>
            <h3>Thank You for joining us..!</h3>
            <h3>Verification sent to {props.email}.</h3>
        </div>
    )
}
