import React from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
//import ErrorText from './ErrorText';
import './styles.css';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      Username: '',
      Password: '',
    };
  }

  handleLogin = (e) => {
    axios.post('http://15.206.91.32:3000/doctor/doctor/signup',this.state).then( res =>{
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
    
    let usernameOptions = {
      maxLength: 40,
      placeholder: 'Email',
      type: 'email',
      containerClassName: 'input-container'
    };

    let passwordOptions = {
      maxLength: 40,
      placeholder: 'Password',
      type: 'password',
      containerClassName: 'input-container'
    };

    let formOptions = {
      className: 'login-form'
    };

    let i18n = {
      submitLabel: 'Sign In'
    };

    if (this.props.username) {
      usernameOptions = Object.assign(usernameOptions, this.props.username);
    }

    if (this.props.password) {
      passwordOptions = Object.assign(passwordOptions, this.props.password);
    }

    if (this.props.form) {
      formOptions = Object.assign(formOptions, this.props.form);
    }

    if (this.props.text) {
      i18n = Object.assign(i18n, this.props.text);
    }

    return (
    <div className="text" 
    style={{
        position:"absolute",
        top:"20%",
        backgroundColor:"#dee",
        padding:"10px",
        borderRadius:"5",
        height:"70vh",
        width:"100vh",
        marginLeft:"25%"

    }}>
      <form action="javascript:void(0)" noValidate onSubmit={ this.handleLogin} className={formOptions.className}>
        <div className={usernameOptions.containerClassName}>
          <input
            maxLength={usernameOptions.maxLength}
            placeholder={usernameOptions.placeholder}
            autoComplete="off"
            name='Username'
            className={usernameOptions.className}
            onChange={this.handleChange}
            type={usernameOptions.type}
          />
          
          <span className="glyphicon glyphicon-envelope " />
        </div>
        <div className={passwordOptions.containerClassName}>
          <input
            autoComplete="off"
            className={passwordOptions.className}
            maxLength={40}
            name="Password"
            onChange={this.handleChange}
            placeholder={passwordOptions.placeholder}
            type="password"
          />
          
          <span className="glyphicon glyphicon-lock" />
        </div>
        <div style={{
            content: ' ',
            marginRight: -15,
            marginLeft: -15
          }}
        >
          <div className="button-container">
          <Link to="/List">
            <button type="submit" className="btnSubmit">{i18n.submitLabel}</button>
          </Link> 
          </div>
        </div>
        <div className='btn-signup'>
          <p>New User? |
          <Link to="/Signup"> Sign Up</Link>
          </p>
        </div>
      </form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  username: PropTypes.object,
  password: PropTypes.object,
  form: PropTypes.object,
  text: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};


LoginForm.defaultProps = {
  username: {},
  password: {}
};

export default LoginForm;