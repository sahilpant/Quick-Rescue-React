import React,{ useEffect } from 'react';
import { Link ,Redirect, useHistory} from 'react-router-dom';
import './login.css';
import axios from 'axios';

class LoginForm extends React.Component{
  state={
    email:'',
    password:''
  }

  handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://15.206.91.32:3000/userser/user/signin',{
        email : this.state.email,
        password: this.state.password

    }).then( res =>{
      console.log(res)
    })
     .catch(err => {
       console.log(err)
     })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
    
      <div className="wrapper">
        <form className="login" noValidate onSubmit={ this.handleLogin}>
          <p className="title">Log in</p>
          <input
           type="text"
           placeholder="Email" autoFocus required
           autoComplete="off"
           name='email'
           onChange={this.handleChange} />
          <i className="fa fa-user" />
          <input 
          type="password" 
          placeholder="Password" required 
          autoComplete="off"
          name="password"
          onChange={this.handleChange}/>
          <i className="fa fa-key" />
          <Link to='/board'>
          <button type='submit' >
            <i className="spinner" />
            <span className="state">Log in</span>
          </button>
          </Link>
        </form>
        <footer>New User? <Link to ="/PSignup">Signup</Link></footer>
        <p />
      </div>

    );
  }
}

export default LoginForm;
