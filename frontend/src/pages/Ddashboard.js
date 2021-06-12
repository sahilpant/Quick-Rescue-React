import axios from "axios"
import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import AccountCircle from "@material-ui/icons/AccountCircle"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@material-ui/core"

const Ddashboard = () => {
  const [appointmentsLoading, setAppointmentLoading] = useState(false)
  const [appointments, setAppointment] = useState([])
  const [appointmentsError, setAppointmentError] = useState()

  useEffect(() => {}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setAppointmentLoading(true)
    setAppointment([])
    setAppointmentError()
    axios
      .get("http://15.206.91.32:3000/doctor/doctor/appointment", {
        params: {
          email: e.target.email.value,
        },
      })
      .then((res) => {
        setAppointmentLoading(false)
        setAppointment(res.data)
        setAppointmentError()
      })
      .catch((err) => {
        setAppointmentLoading(false)
        setAppointment([])
        setAppointmentError("Error in fetching appointments")
      })
  }
  return (
    <Container
      component={Paper}
      style={{ marginTop: "2rem", padding: "3rem", height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <Box display='flex'>
          <TextField
            id='input-with-icon-grid'
            variant='outlined'
            size='small'
            label='Enter Email'
            name='email'
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            style={{ marginLeft: "1rem" }}>
            Find
          </Button>
        </Box>
      </form>

      {appointmentsLoading && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
      {appointments.length > 0 && (
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
                <TableCell align='left'>
                  <strong>Date</strong>
                </TableCell>
                <TableCell align='left'>
                  <strong>Time</strong>
                </TableCell>
                <TableCell align='left'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
            {appointments.map((post, index) => (
              <TableRow key={index}>
                <TableCell align='left'>
                  {post.userfirstname} {post.userlastname}
                </TableCell>
                <TableCell align='left'>{post.useremail}</TableCell>
                <TableCell align='left'>{post.date}</TableCell>
                <TableCell align='left'>{post.time}</TableCell>
                <TableCell align='left'>
                  <Button
                    variant='contained'
                    color='primary'
                    //component={Link}
                    to={{
                      pathname: "#",
                    }}>
                    <VideoCallIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}

export default Ddashboard

// export default class Dboard extends React.Component{
//   state={
//     email:'',
//     user:[],
//   }
//   /* useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     home: {
//       background: '#fff',
//       backgroundSize:'cover',
//     },
//   }));*/
//  /*export default function Dborad() {
//    const [posts, setPost] = useState({email: '', user: []})
//    const{user}=posts*/

//     handle = (e) => {
//         e.preventDefault();
//         axios.get('http://15.206.91.32:3000/doctor/doctor/appointment',{params:{
//         email: this.state.email,
//         }
//     }).
//      then(res =>{
//       const data = res.data
//       this.setState({ user: data })
//       console.log(data)
//      })
//      .catch(err =>{
//          console.log(err)
//      })

//    }

//     /*classes = useStyles();*/
//    render(){
//   return(

//   );
//  }
// }
