import React, {Component} from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  SkillButton
} from "./common";
import { Link } from "react-router-dom";
import {UniversityList, MajorList, MinorList} from "./dropdown";
import { Skillpopup } from '../SkillBox/SkillBoxIndex';

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
export function ProfileForm(props) {

  return (
    <BoxContainer>
      <FormContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Name*</InnerText>
          </RowLeft>
          <RowRight>
            <Input placeholder="Full Name" />
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
            <InnerText>Major/Industry*</InnerText>
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
        <RowContainer>
          <RowLeft>
            <InnerText>LinkedIn</InnerText>
          </RowLeft>
          <RowRight>
            <Input placeholder = "LinkedIn URL" />
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
        <Link to = '/jobs'>
          <SubmitButton>Cancel</SubmitButton>
        </Link>
        <Marginer direction="horizontal" margin="2em" />
        <Link to = '/jobs'>
          <SubmitButton>Confirm</SubmitButton>
        </Link>
      </RowContainer>
      <Marginer direction="vertical" margin={20} />

    </BoxContainer>
  );
}
