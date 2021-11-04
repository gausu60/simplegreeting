import React from 'react'

export default function Register(props) {
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
        <div className="container card p-3 m-2 register-container ">
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
            </form>
        </div>
    )
}
