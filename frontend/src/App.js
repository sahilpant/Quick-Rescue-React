import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from "react"
import { About } from "./pages/About"
import PLogin from "./pages/PLogin"
import DLogin from "./pages/DLogin"
import PSignUp from "./pages/PSignup"
import DSignUp from "./pages/DSignup"
import List from "./pages/Pboard"
import Appointment from "./pages/Appointment"
import Dashboard from "./pages/Pdashboard"
import Navbar from "./pages/Navbar"
import Numbers from "./pages/HelpNumbers"
import Dboard from './pages/Ddashboard';
import PShowApp from './pages/ShowApp';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/PLogin' component={PLogin} />
            <Route path='/DLogin' component={DLogin} />
            <Route path='/PSignup' component={PSignUp} />
            <Route path='/DSignup' component={DSignUp} />
            <Route path='/board' component={Dashboard} />
            <Route path='/List' component={List} />
            <Route path='/appointment' component={Appointment} />
            <Route path='/numbers' component={Numbers} />
            <Route path='/Dboard' component={Dboard}/>
            <Route path='/Pshow' component={PShowApp}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
