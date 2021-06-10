import React from 'react';
import './list.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class List extends React.Component {
  
  state = {
    users: [],
    name: "",
    email: ""
  };

  getUsers = ()=> {
    axios
      .get("http://15.206.91.32:3000/doctor/doctor/get")
      .then((response) => {
        const data = response.data;
        this.setState({users: data});
        console.log(data);
        })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getUsers();

  }

  display = (users) => {
    if(!users.length) return null;

    return users.map((post, index)=>(
      <div key={index} className = "twrapper">
        <table className="rwd-table">
          <tbody><tr>
              <th>Movie Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
            <tr>
              <td data-th="Name">{post.firstname} {post.lastname}</td>
              <td data-th="Email" >{post.email}</td>
              <td ><Link to = "/appointment">
              <button  type="button" >Book Appointment</button>
              </Link></td>
            </tr>
        </tbody></table>
      </div>
    ));
  }

  render(){
    return (
      <div className = "tbody">
        <h1>Doctors List</h1>
        {this.display(this.state.users)}
        
      </div>
    );
  }
}

  export default List;