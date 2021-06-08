import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  React from 'react';
import  {NavigationBar}  from './components/NavigationBar';
import { About } from './pages/About';
import LoginForm from './pages/Login';
import SignUp from './pages/Signup';
import List from './pages/Pboard';
import Appointment from './pages/Appointment';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/Login" component={LoginForm}/>
          <Route exact path="/Signup" component={SignUp}/>
          <Route path="/List" component={List}/>
          <Route path="/appointment" component={Appointment}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
  
export default App;