import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./login.css"

export default class PSignUp extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }

  handleSign = (e) => {
    e.preventDefault()

    axios
      .post("http://65.2.73.180:3000/userser/user/signup", {
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
      <div className='wrapper'>
        <form className='login' onSubmit={this.handleSign}>
          <p className='title'>Sign Up</p>
          <input
            type='text'
            placeholder='First Name'
            autoFocus
            required
            autoComplete='off'
            name='firstname'
            value={firstname}
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            autoFocus
            required
            autoComplete='off'
            name='lastname'
            value={lastname}
            onChange={this.handleChange}
          />
          <input
            type='email'
            placeholder='Email'
            autoFocus
            required
            autoComplete='off'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            required
            autoComplete='off'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <button type='submit'>
            <i className='spinner' />
            <span className='state'>Sign up</span>
          </button>
        </form>
        <footer>
          Already user? <Link to='/PLogin'>Sign in</Link>
        </footer>
        <p />
      </div>
    )
  }
}
