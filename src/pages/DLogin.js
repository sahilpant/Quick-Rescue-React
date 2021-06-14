import axios from "axios"
import React from "react"
import { Link, useHistory } from "react-router-dom"

const DLogin = () => {
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://65.2.73.180:3000/doctor/doctor/signin", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        localStorage.setItem("login", JSON.stringify(res.data.data))
        if (res.data.result) {
          // history.push("/Dboard")
          window.location.href = "/Dboard"
        } else {
          alert("Wrong User Input")
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='wrapper'>
      <form className='login' noValidate onSubmit={handleSubmit}>
        <p className='title'>Doctor Log in</p>
        <input
          type='text'
          placeholder='Email'
          autofocus
          required
          autoComplete='off'
          name='email'
        />
        <i className='fa fa-user' />
        <input
          type='password'
          placeholder='Password'
          required
          autoComplete='off'
          name='password'
        />
        <i className='fa fa-key' />
        <button type='submit'>
          <i className='spinner' />
          <span className='state'>Log in</span>
        </button>
      </form>
      <footer>
        New User? <Link to='/DSignup'>Signup</Link>
      </footer>
      <p />
    </div>
  )
}

export default DLogin
