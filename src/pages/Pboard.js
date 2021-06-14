import React from "react"
// import "./list.css"
import axios from "axios"
import { Link } from "react-router-dom"
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"

class List extends React.Component {
  state = {
    users: [],
    name: "",
    email: "",
  }

  getUsers = () => {
    axios
      .get("http://65.2.73.180:3000/doctor/doctor/get")
      .then((response) => {
        const data = response.data
        this.setState({ users: data })
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getUsers()
  }

  display = (users) => {
    if (!users.length) return null

    return (
      <TableContainer style={{ padding: "4rem" }} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>
                <strong> Name</strong>
              </TableCell>
              <TableCell align='left'>
                <strong>Email</strong>
              </TableCell>
              <TableCell align='left'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          {users.map((post, index) => (
            <TableRow key={index}>
              <TableCell align='left'>
                {post.firstname} {post.lastname}
              </TableCell>
              <TableCell align='left'>{post.email}</TableCell>
              <TableCell align='left'>
                <Button
                  variant='contained'
                  color='primary'
                  component={Link}
                  to={{
                    pathname: "/appointment",
                    state: {
                      fName: `${post.firstname}`,
                      lName: `${post.lastname}`,
                      email: `${post.email}`,
                    },
                  }}>
                  Book Appointment
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    )
  }

  render() {
    return (
      <Container>
        <h1>Doctors List</h1>
        {this.display(this.state.users)}
      </Container>
    )
  }
}

export default List
