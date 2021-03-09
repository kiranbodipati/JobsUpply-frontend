import "./App.css";
import { HomePage } from "./containers/HomePage";
import { Login } from "./containers/Login";
import { ProfileEdit } from "./containers/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component = {HomePage} />
          <Route path = "/login" exact component = {Login} />
          <Route path = "/profile" exact component = {ProfileEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
