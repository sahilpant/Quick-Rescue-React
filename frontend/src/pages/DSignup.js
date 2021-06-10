import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class DSignUp extends Component {
  state ={
      firstname : "",
      lastname : "",
      email : "",
      password : ""
  };

  handleSign = (e) => {
      e.preventDefault();
      
      axios.post('http://15.206.91.32:3000/doctor/doctor/signup', {
        firstname : this.state.firstname,
        lastname : this.state.lastname,
        email : this.state.email,
        password: this.state.password

      })
      .then(res => {
          window.alert(`${res.data.message}`)
      })
      .catch(err => {
          console.log(err)
      })
      
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

render() {
    const {firstname, lastname, email, password } = this.setState
    return (
      
        <div className="wrapper">
        <form className="login" noValidate onSubmit={ this.handleSign}>
          <p className="title">Sign Up</p>
          <input
           type="text"
           placeholder="First Name" autofocus required
           autoComplete="off"
           name='firstname'
           value = {firstname}
           onChange={this.handleChange} />
           <input
           type="text"
           placeholder="Last Name" autofocus required
           autoComplete="off"
           name='lastname'
           value = {lastname}
           onChange={this.handleChange} />
           <input
           type="email"
           placeholder="Email" autofocus required
           autoComplete="off"
           name='email'
           value = {email}
           onChange={this.handleChange} />
          <input 
          type="password" 
          placeholder="Password" required 
          autoComplete="off"
          name="password"
          value={password}
          onChange={this.handleChange}/>
          <button type='submit' >
            <i className="spinner" />
            <span className="state">Sign up</span>
          </button>
        </form>
        <footer>Already user? <Link to ="/DLogin">Sign in</Link></footer>
        <p />
      </div>
    );
}
}