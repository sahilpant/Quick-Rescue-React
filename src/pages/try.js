import React from 'react';
import './try.css';

class Try extends React.Component{
    render(){
      return (
  
        <div className="container">
          <form>
            <div className="row">
              <h4>Sign Up</h4>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="First Name" />
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Last Name" />
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="email" placeholder="Email Adress" />
                <div className="input-icon"><i className="fa fa-envelope" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="password" placeholder="Password" />
                <div className="input-icon"><i className="fa fa-key" /></div>
              </div>
              <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default Try;
