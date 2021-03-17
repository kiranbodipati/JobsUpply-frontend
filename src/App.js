import "./App.css";
import { HomePage } from "./containers/HomePage";
import { Login } from "./containers/Login";
import { ProfileEdit } from "./containers/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EditSkills } from "./containers/Skills";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/login" exact component = {Login} />
          <Route path = "/profile" exact component = {ProfileEdit} />
          <Route path = "/skill" exact component = {EditSkills} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
