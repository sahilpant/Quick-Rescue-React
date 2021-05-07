import * as  React from 'react';
import "./AddDoc.css";


class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
        errormessage: ''
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "age") {
        if (val !=="" && !Number(val)) {
          err = <strong>Your age must be a number</strong>;
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
    }
    render() {
      return (
        <div className= "col-x1-12 col-md-12">  
        <div className= "panel">
          <div className = "panel-header panel-custome">
            <h6>Add Doctors</h6>
            <a className = "text" href = "./Doctor.js" style={{color:"black"}}>Doctors List</a>
          </div>
          <div className = "panel-body">
          <form novalidate class>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom01">
                First Name</label>
                <div className = "input-group">
                <input required placeholder = "First Name" type="text" id="validationCustom01"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom02">
                Last Name</label>
                <div className = "input-group">
                <input required placeholder = "Last Name" type="text" id="validationCustom02"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom03">
                Email Address</label>
                <div className = "input-group">
                <input required placeholder = "Email Address" type="email" id="validationCustom03"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom04">
                Create Password</label>
                <div className = "input-group">
                <input required placeholder = "Enter Password" type="password" id="validationCustom04"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom05">
                Designation</label>
                <div className = "input-group">
                <input required placeholder = "Enter Designation" type="text" id="validationCustom05"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom06">
                Department</label>
                <div className = "input-group">
                <select required id="validationCustom06" className="form-control">
                <option>--Select--</option>
                <option value="Neurology">Neurology</option>
                <option value="Gynaecology">Gynaecology</option>
                <option value="Microbiology">Microbiology</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Neoatal">Neonatal</option>
                <option value="Other">Other</option>
                </select>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom07">
                Address</label>
                <div className = "input-group">
                <input required placeholder = "Enter Address" type="text" id="validationCustom07"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom08">
                Specialist</label>
                <div className = "input-group">
                <input required placeholder = "Specialist" type="text" id="validationCustom08"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom09">
                Mobile</label>
                <div className = "input-group">
                <input required placeholder = "Mobile No." type="number" id="validationCustom09"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom10">
                Adhaar Card Image</label>
                <div className = "input-group">
                <div className="custom custom-file">
                <input id="validationCustom10" type="file" lang="en" className="custom-file-input"/>
                <label htmlFor="validationCustom10" className="custom-file-label">
                Choose File...
                </label>
                </div>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-12">
                <label className = "form-label" htmlFor = "validationCustom11">
                Short Biography</label>
                <div className = "input-group">
                <textarea rows="3" id="validationCustom03"
                 className = "form-control" onChange={this.myChangeHandler}></textarea>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom12">
                Date of Birth</label>
                <div className = "input-group">
                <input required placeholder = "Date of Birth" type="text" id="validationCustom12"
                 className = "form-control" onChange={this.myChangeHandler}/>
                </div>
                </div>
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label" htmlFor = "validationCustom13">
                Blood Group</label>
                <div className = "input-group">
                <select required id="validationCustom13" className="form-control">
                <option>--Select--</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                </select>
                </div>
                </div>
            </div>
            <div className = "form-row">
                <div className ="mb-3 form-group col-md-6">
                <label className = "form-label">Sex</label>
                <ul className="list d-flex">
                <li className="list-item pl-0">
                <label className="checkbox-wrap">
                <input type="radio" name="radio-example" value="true"/>
                <i className="checkbox-check">
                </i>
                </label>
                <span>Male</span>
                </li>
                <li className="list-item">
                <label className="checkbox-wrap">
                <input type="radio" name="radio-example" value="true" checked/>
                <i className="checkbox-check">
                </i>
                </label>
                <span>Female</span>
                </li>
                </ul>
                </div>
            </div>
            <button type="reset" className="mt-4 d-inline w-20 mr-2 btn btn-warning">
            Reset</button>
            <button type="submit" className="mt-4 d-inline w-20 btn btn-primary">
            Submit</button>
          </form>
          </div>
        </div>
        </div>
        
      );
    }
  }
  export default MyForm;