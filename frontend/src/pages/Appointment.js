import React from 'react';
import './try.css';
import axios from 'axios';


class Appointment extends React.Component{
    state = {
        ufname : "",
        ulname : "",
        uemail : "",
        dfname : "",
        dlname : "",
        demail : "",
        datetime : "",
        des : ""
    }
    
    handle = (e) => {
        e.preventDefault();
        axios.post( 'http://15.206.91.32:3000/userser/User/bookAppointment', {
            userfirstname : this.state.ufname,
            userlastname : this.state.ulname,
            useremail : this.state.uemail,
            doctorfirstname : this.state.dfname,
            doctorlastname : this.state.dlname,
            doctoremail : this.state.demail,
            datetime: this.state.datetime,
            description: this.state.des
        })
        .then(res=>{
            console.log(res)
        })

    }

    change =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

render() {
    const {ufname,ulname,uemail,dfname,dlname,demail,datetime,des} = this.state;
    return (
        <div className="acontainer">
          <form onSubmit = {this.handle}>
            <div className="row">
              <h4>Fill in the Details</h4>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="User First Name" 
                  name = "ufname"
                  value = {ufname}
                  onChange = {this.change}/>
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="User Last Name"
                  name = "ulname"
                  value = {ulname}
                  onChange = {this.change} />
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="email" placeholder="User Email Address"
                  name = "uemail"
                  value = {uemail} 
                  onChange = {this.change}/>
                <div className="input-icon"><i className="fa fa-envelope" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Doctor First Name"
                name= "dfname"
                value = {dfname}
                onChange={this.change} />
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Doctor Last Name" 
                name = "dlname"
                value = {dlname} 
                onChange = {this.change}/>
                <div className="input-icon"><i className="fa fa-user" /></div>
              </div>
              <div className="input-group input-group-icon">
                <input type="email" placeholder="Doctor Email Address" 
                name = "demail"
                value = {demail} 
                onChange = {this.change}/>
                <div className="input-icon"><i className="fa fa-envelope" /></div>
              </div>
              <div>
                <input type="datetime-local" id="datetime" name="datetime" value = {datetime}
                onChange = {this.change} />
              </div>
              <div>
                <label for="story">Description</label>
                <textarea id="story" name="story" rows="4" cols="33"
                name = "des"
                value = {des} 
                onChange = {this.change}></textarea>
              </div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
    );
}

}

export default Appointment;