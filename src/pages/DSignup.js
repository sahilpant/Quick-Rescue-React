import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core"
import { Container } from "@material-ui/core"
import axios from "axios"
import React from "react"
import { Link, useHistory } from "react-router-dom"

const DSignup = () => {
  const history = useHistory()
  const hanldeSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://65.2.73.180:3000/doctor/doctor/signup", {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        speciality: e.target.speciality.value,
      })
      .then((res) => {
        window.alert(`${res.data.message}`)
        history.push("/DLogin")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3rem",
      }}>
      <Card style={{ maxWidth: "20rem" }}>
        <CardContent style={{ display: "flex", flexDirection: "column" }}>
          <form noValidate onSubmit={hanldeSubmit}>
            <Typography
              variant='h5'
              gutterBottom
              style={{ color: "#000", marginBottom: "1rem" }}>
              Sign Up
            </Typography>
            <TextField
              style={{ marginBottom: "1rem" }}
              variant='outlined'
              size='small'
              placeholder='First Name'
              required
              fullWidth
              autoComplete='off'
              label='First Name'
              name='firstname'
            />
            <TextField
              style={{ marginBottom: "1rem" }}
              variant='outlined'
              size='small'
              placeholder='Last Name'
              required
              fullWidth
              autoComplete='off'
              label='Last Name'
              name='lastname'
            />
            <TextField
              variant='outlined'
              size='small'
              type='email'
              placeholder='Email'
              required
              fullWidth
              autoComplete='off'
              label='Email'
              name='email'
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              variant='outlined'
              style={{ marginBottom: "1rem" }}
              size='small'
              type='password'
              placeholder='Password'
              required
              fullWidth
              label='Password'
              name='password'
            />
            <TextField
              variant='outlined'
              size='small'
              type='text'
              placeholder='Speciality'
              required
              fullWidth
              name='speciality'
              label='Speciality'
              style={{ marginBottom: "1rem" }}
            />
            <Button type='submit' variant='contained' color='primary' fullWidth>
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
      <Typography
        variant='h6'
        gutterBottom
        style={{ color: "#000", marginTop: "1rem" }}>
        Already user? <Link to='/DLogin'>Sign in</Link>
      </Typography>
      <p />
    </Container>
  )
}

export default DSignup
