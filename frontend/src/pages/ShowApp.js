import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
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


export default class PShowApp extends React.Component{
  state={
    email:'',
    user:[],
  }
  /* useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    home: {
      background: '#fff',
      backgroundSize:'cover',
    },
  }));*/
 /*export default function Dborad() {
   const [posts, setPost] = useState({email: '', user: []})
   const{user}=posts*/

    handle = (e) => {
        e.preventDefault();
        axios.get('http://15.206.91.32:3000/userser/user/appointment',{params:{
        email: this.state.email,
        }
    }).
     then(res =>{
      const data = res.data
      this.setState({ user: data })
      console.log(data)
     })
     .catch(err =>{
         console.log(err)
     })

   }
  
    /*classes = useStyles();*/
   render(){
  return(
    <div style={{background: '#fff', backgroundSize:'cover',}}>
      <div >
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" 
          label="Enter Email" 
          name="email"
          value = {this.state.email}
          onChange={e => this.setState({email:e.target.value})}
          />
          <Button
                variant='contained'
                color='primary'
                onClick={this.handle}
                >
                Submit
            </Button>
        </Grid>
      </Grid>
     </div>
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
          {this.state.user.map((post ,index) => (
            <TableRow key={index}>
              <TableCell align='left'>
                {post.doctorfirstname} {post.doctorlastname}
              </TableCell>
              <TableCell align='left'>{post.doctoremail}</TableCell>
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
                  <VideoCallIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
 }
}
