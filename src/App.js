import "./App.css";
import { HomePage } from "./containers/HomePage/HomePageIndex";
import { Login } from "./containers/Login/LoginIndex";
import { ProfileEdit } from "./containers/Profile/ProfileIndex";
import { Skills } from "./components/SkillBox/SkillBoxIndex";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/login" exact component = {Login} />
          <Route path = "/profile" exact component = {ProfileEdit} />
          <Route path = "/skill" exact component = {Skills} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;