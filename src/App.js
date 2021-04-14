import "./App.css";
import { HomePage } from "./containers/HomePage/HomePageIndex";
import { Login } from "./containers/Login/LoginIndex";
import { ProfileEdit } from "./containers/Profile/ProfileIndex";
import { Skills } from "./components/SkillBox/SkillBoxIndex";
import { UserMain } from "./containers/UserMain/UserMainIndex";
import { JobDetails } from "./containers/JobDetails/JobDetaisIndex";
import Home from "./components/Home";
import {ProfileForm} from "./components/profileBox/ProfileForm";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import React, { useState, useEffect } from "react";
import AuthService from "./services/auth.service.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { UserDetails } from "./data";


function App() {

  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState({token:"temp", user: UserDetails[0]});

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
        else {
            console.log("oops")
        }
        // if(!currentUser) {
        //     console.log(currentUser);
        //    return ( <Login/>)};
    }, []);

  const logOut = () => {
    AuthService.logout();
  };

  // const {token, setToken} = useToken();

  if(currentUser.token==="temp") {
    return (
      <Router>
        <Switch>
        <Route path = {["/", "/main"]} exact component = {HomePage} />
        <Route path={["/login", "/jobs", "/jobdetails", "/Settings"]} exact component={Login} />
        </Switch>
      </Router>
    );
    }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {["/", "/main"]} exact component = {HomePage} />
          {/* <Route exact path={["/", "/home"]} component={Home} /> */}
          <Route path = "/login" exact component = {Login} />
          <Route path = "/Settings" exact component = {ProfileEdit} />
          {/* <Route exact path="/createProfile" component={ProfileForm} /> */}
          {/* <Route path = "/skill" exact component = {Skills} /> */}
          <Route path = "/jobs" exact component = {UserMain} />
          <Route path = "/jobdetails" exact component = {JobDetails} />
          {/* <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;