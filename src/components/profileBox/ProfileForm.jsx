import React, {Component, useState, useRef, useContext} from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  ConfirmButton,
  SkillButton
} from "./common";
import {UniversityList, MajorList, MinorList} from "./dropdown";
import { Skillpopup } from '../SkillBox/SkillBoxIndex';
import  { Redirect } from 'react-router-dom'
// import AuthService from "../../services/auth.service";

import { Link, useHistory } from "react-router-dom";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import AuthService from "../../services/auth.service";

const InnerText = styled.h5`
  font-weight: 500;
  color: #000;
  z-index: 10;
  margin-top: 0;
  font-size: 14px;
  line-height: 26px;
  vertical-align: middle;
`;

const RowContainer = styled.div`
  width: 100%;
  line-height: 26px;
  clear: both;
  margin-top: 10px;
  display: flex;
  text-align: initial;
`;

const RowLeft = styled.div`
  width: 20%;
  text-align: left;
  float: left;
  margin-top: 1vh;
`;

const RowRight = styled.div`
  width: 60%;
  padding-left: 10px;
  text-align: left;
  float: left;
`;

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
export class Popups extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
}
// const Profile = () => {
//   const currentUser = AuthService.getCurrentUser();

//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>
//           <strong>{currentUser.Email}</strong> Profile
//         </h3>
//       </header>
//       <p>
//         <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
//         {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       </p>
//       <p>
//         <strong>Id:</strong> {currentUser.id}
//       </p>
//       <p>
//         <strong>Email:</strong> {currentUser.Email}
//       </p>
//       <strong>Authorities:</strong>
//       <ul>
//         {currentUser.roles &&
//           currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default Profile;

export const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
  else {
    return 1;
  }
};


export function ProfileForm(props) {
  const form = useRef();
  const checkBtn = useRef();
  const hist = useHistory();

  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [minor, setMinor] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const onChangeName = (e) => {
    const Name = e.target.value;
    setName(Name);
    if (required(Name) === 1){
      setFormIsValid(true);
      setMessage("")
    }
    else {
      setFormIsValid(false)
      setMessage("Invalid name!")
    }
  };

  const onChangeUni = (e) => {
    const Name = e.target.value;
    setUniversity(Name);
    if (required(Name) === 1){
      setFormIsValid(true);
      setMessage("")
    }
    else {
      setFormIsValid(false)
      setMessage("Invalid university!")
    }
  };

  const onChangeMajor = (e) => {
    const Name = e.target.value;
    setMajor(Name);
    if (required(Name) === 1){
      setFormIsValid(true);
      setMessage("")
    }
    else {
      setFormIsValid(false)
      setMessage("Invalid major!")
    }
  };

  const onChangeMinor = (e) => {
    const Name = e.target.value;
    setMinor(Name);
    if (required(Name) === 1){
      setFormIsValid(true);
      setMessage("")
    }
    else {
      setFormIsValid(false)
      setMessage("Invalid Minor! Choose None for default.")
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0 && formIsValid === true) {
      AuthService.update({"name": name, "university":university, "major":major, "minor":minor}).then(
        (response) => {
          setSuccessful(true);
          hist.push("/Settings")
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
    else {
      setSuccessful(false);
    }
  };

  return (
    <BoxContainer>
      <Form onSubmit={handleUpdate} ref={form}>
      <FormContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Name*</InnerText>
          </RowLeft>
          <RowRight>
            <Input placeholder="Full Name" 
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required]}/>
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>University*</InnerText>
          </RowLeft>
          <RowRight>
            <UniversityList />
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Major*</InnerText>
          </RowLeft>
          <RowRight>
            <MajorList />
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Minor*</InnerText>
          </RowLeft>
          <RowRight>
          <MinorList/>
          </RowRight>
        </RowContainer>
      </FormContainer>
      <RowContainer>
        {/* <RowLeft>
          <Link style={{ textDecoration: 'none', color: 'white' }} to = "/skill">
            <SkillButton>Edit Skills</SkillButton>
          </Link>
        </RowLeft> */}
        <Skillpopup />
      </RowContainer>
      <Marginer direction="vertical" margin="1em" />
      <RowContainer>
        {/* <Link to = '/jobs'>
          <SubmitButton>Cancel</SubmitButton>
        </Link> */}
        {/* <Marginer direction="horizontal" margin="2em" /> */}
        <Link to = '/jobs'>
          <ConfirmButton>Confirm</ConfirmButton>
        </Link>
      </RowContainer>
      <Marginer direction="vertical" margin={20} />
      </Form>
    </BoxContainer>
  );
}
