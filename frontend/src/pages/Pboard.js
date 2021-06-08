import React from 'react';
import './list.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class List extends React.Component {
  /*nameRef = React.createRef();

  handle = (item) =>{
    const ename = this.nameRef.current.value;
    
    if(ename){
      this.props.onNameAdded(ename)
    }

  }
*/
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
        console.log("Error");
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  display = (users) => {
    if(!users.length) return null;

    return users.map((post, index)=>(
      <div key={index}>
        <ul>
          <li >{post.firstname} {post.lastname}</li>
          <li>{post.email}</li>
          <li><Link to = "/appointment">
          <button  type="button" >Book Appointment</button>
          </Link></li>
        </ul>
        
      </div>
    ));
  }

  render() {
    return(
      <div className="container">
        <h1>Doctors List</h1>
        {this.display(this.state.users)}
      </div>
  );
  }
}

  export default List;