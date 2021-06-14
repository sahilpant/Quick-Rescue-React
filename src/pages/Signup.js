import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }

  handleSign = (e) => {
    e.preventDefault()

    axios
      .post("http://65.2.73.180:3000/doctor/doctor/signup", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        window.alert(`${res.data.message}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { firstname, lastname, email, password } = this.setState
    return (
      <div
        className='text'
        style={{
          position: "absolute",
          top: "20%",
          backgroundColor: "#dee",
          padding: "10px",
          borderRadius: "5",
          height: "70vh",
          width: "100vh",
          marginLeft: "25%",
        }}>
        <form onSubmit={this.handleSign}>
          <div className='form-group'>
            <label>First name</label>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
              name='firstname'
              value={firstname}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div className='form-group'>
            <label>Last name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
              name='lastname'
              value={lastname}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div className='form-group'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <br />

          <button type='submit' className='btn btn-primary btn-block'>
            Sign Up
          </button>
          <br />
          <br />
          <br />
          <p className='forgot-password text-right'>
            Already registered <Link to='/Login'>sign in?</Link>
          </p>
        </form>
      </div>
    )
  }
}
