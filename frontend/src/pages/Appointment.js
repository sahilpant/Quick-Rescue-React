import React from 'react';
import List from './Pboard';

class Appointment extends React.Component{
    state = {
        datetime : ""
    }
    /*handleAddName(name){
        this.setState({ docname : name})
    }*/
    /*handle = (e) => {
        e.preventDefault();
        axios.post(,{
            datetime: this.state.datetime;
        })
        .then(res=>{
            console.log(res)
        })

    }
*/
    change =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

render() {
    const {datetime} = this.state;
    return (
    <div>
        <form onSubmit={this.handle}>
        <label htmlFor="datetime">Select Date and Time:</label>
        <input type="datetime-local" id="datetime" name="datetime" value = {datetime}
         onChange = {this.change} />
        <button type="submit">Submit</button>
        </form>
    </div>
    );
}

}

export default Appointment;