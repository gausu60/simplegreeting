import React, { Component } from 'react'
import Greet from './components/Greet';
import Register from './components/Register';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showpassword: false,
    };

  }
  registerationHandle = (event)=>
  {
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    this.setState({ name, email , password, isRegistered:true});
    event.preventDefault();
  }
  passwordHandler = ()=>{
    console.log(this.state);
    this.setState({showpassword: !this.state.showpassword},()=>{
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        {
          this.state.isRegistered ? <Greet name={this.state.name} email={this.state.email} /> : <Register submit={this.registerationHandle} password={this.state.showpassword} showpasswordHandler={this.passwordHandler}/>
        }
      </div>
    )
  }
}

