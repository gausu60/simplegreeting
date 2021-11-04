import React from 'react';
import styled from 'styled-components';

export default function Register(props) {
    const Stylebutton = styled.button`
    background-color: red;
    color: white;
    padding: 5px;
    margin: 2px;
    border: none;

    `;
    const StyleRegisterContainer = styled.div`
    width: 600px;
    &:hover{
        box-shadow: 0px 0px 5px grey;
    }
    @media (min-width:0px) and (max-width:600px)
    {
        width: 300px;
    }
    `;
    let btnText,textBox;
    let btnClasses = ["btn","btn-md","m-1"];
    if (props.password === true) {
        btnText = "Hide Password";
        textBox = "text";
        btnClasses.push("btn-danger");
    }
    else{
        btnText = "show Password";
        textBox = "password";
        btnClasses.push("btn-success");
    }
    return (
        <StyleRegisterContainer className="container card p-3 m-2 ">
            <h1 className="text-center">Registeration Form </h1>
            <form onSubmit={props.submit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input type={textBox} name="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary btn-md m-1">Register</button>
                <button type="button" className={btnClasses.join(" ")} onClick={props.showpasswordHandler} >{btnText}</button>
                <Stylebutton type="button" color="black">Login Here!</Stylebutton>
            </form>
        </StyleRegisterContainer>
    )
}
