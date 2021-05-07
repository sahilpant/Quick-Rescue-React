import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import {
  Doctor,
  DocList,
  AddDoc
} from "./pages/Doctor";
import { Patient,PatientList,AddPatient } from "./pages/Patient";
import {Pay} from "./pages/Payment";
import {Report} from "./pages/Report";
import Dept from "./pages/Department";
import Bed from "./pages/BedManager";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/doctor" exact component={Doctor} />
        <Route path="/doctor/addDoc" exact component={AddDoc} />
        <Route path="/doctor/listDoc" exact component={DocList} />
        <Route path="/patient" exact component={Patient} />
        <Route path="/patient/addPatient" exact component={AddPatient} />
        <Route path="/patient/listPatient" exact component={PatientList} />
        <Route path="/department" exact component={Dept} />
        <Route path="/bedManager" exact component={Bed} />
        <Route path="/payment" exact component={Pay} />
        <Route path="/report" exact component={Report} />
      </Switch>
    </Router>
  );
}
  
export default App;