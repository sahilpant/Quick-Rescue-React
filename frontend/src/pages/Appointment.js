import React from "react"
import "./try.css"
import axios from "axios"
import { useHistory, useLocation } from "react-router"

const Appointment = () => {
  const history = useHistory()
  const { state } = useLocation()

  console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      userfirstname: e.target.ufname.value,
      userlastname: e.target.ulname.value,
      useremail: e.target.uemail.value,
      doctorfirstname: e.target.dfname.value,
      doctorlastname: e.target.dlname.value,
      doctoremail: e.target.demail.value,
      datetime: e.target.datetime.value,
      date: new Date(e.target.datetime.value).toLocaleDateString(),
      time: new Date(e.target.datetime.value).toLocaleTimeString("en-CA"),
      description: e.target.des.value,
    }

    axios
      .post("http://15.206.91.32:3000/userser/User/bookAppointment", {
        ...user,
      })
      .then((res) => {
        console.log(res)
        if (window.confirm("Appointment Booked")) {
          history.push("/board")
        }
      })
  }
  return (
    <div className='acontainer'>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <h4>Fill in the Details</h4>
          <div className='input-group input-group-icon'>
            <input type='text' placeholder='User First Name' name='ufname' />
            <div className='input-icon'>
              <i className='fa fa-user' />
            </div>
          </div>
          <div className='input-group input-group-icon'>
            <input type='text' placeholder='User Last Name' name='ulname' />
            <div className='input-icon'>
              <i className='fa fa-user' />
            </div>
          </div>
          <div className='input-group input-group-icon'>
            <input
              type='email'
              placeholder='User Email Address'
              name='uemail'
            />
            <div className='input-icon'>
              <i className='fa fa-envelope' />
            </div>
          </div>
          <div className='input-group input-group-icon'>
            <input
              type='text'
              value={state.fName}
              placeholder='Doctor First Name'
              name='dfname'
            />
            <div className='input-icon'>
              <i className='fa fa-user' />
            </div>
          </div>
          <div className='input-group input-group-icon'>
            <input
              type='text'
              placeholder='Doctor Last Name'
              name='dlname'
              value={state.lName}
            />
            <div className='input-icon'>
              <i className='fa fa-user' />
            </div>
          </div>
          <div className='input-group input-group-icon'>
            <input
              type='email'
              placeholder='Doctor Email Address'
              value={state.email}
              name='demail'
            />
            <div className='input-icon'>
              <i className='fa fa-envelope' />
            </div>
          </div>
          <div>
            <input type='datetime-local' id='datetime' name='datetime' />
          </div>
          <div>
            <label for='story'>Description</label>
            <textarea
              id='story'
              name='story'
              rows='4'
              cols='33'
              name='des'></textarea>
          </div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Appointment
