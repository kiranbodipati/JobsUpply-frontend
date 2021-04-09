import React, {Component} from "react";
import styled from "styled-components";
import AnimatedMulti from "./SkillDropdown";
import { motion } from "framer-motion";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import BackImg from "../../Images/Backorange.png";

const OuterContainer = styled.div`
  width: 400px;
  min-height: 251px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative; 
  overflow-x: hidden;
  overflow-y: visible;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 1.8em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 250%;
  height: 450px;
  border-radius: 50%;
  transform: rotate(160deg);
  top: -400px;
  left: -260px;
  background: rgb(244,98,58); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #FDC830,
    rgb(244,98,58)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #FDC830,
    rgb(244,98,58)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;


export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: -15vh;
`;

export const SubmitButton = styled.button`
padding: 11px 0%;
width: 12em;
flex: center;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;

background: rgb(244,98,58); /* fallback for old browsers */
background: -webkit-linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

&:focus {
  outline: none;
}

&:hover {
  filter: brightness(1.03);
}
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -15px;
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  margin-bottom: 0;
  font-size: 30px;
  line-height: 1.24;
`;

const SmallText = styled.h5`
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin-bottom: 10;
  font-size: 13px;
  line-height: 1.24;
`;

const BackImage = styled.div`
  width: 2em;
  height: 1.3em;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  line-height: 26px;
  clear: both;
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

class Skills extends Component {
  render() {
    var left = 5000 + 'px';
    var top = 5000 + 'px';
    var padding = 5000 + 'px';
    return (
    <OuterContainer>
        <TopContainer>
            <BackDrop/>
            <HeaderContainer>
                <HeaderText>Edit Skills</HeaderText>
            </HeaderContainer>
        </TopContainer>
        <BoxContainer>
            <FormContainer>
                <AnimatedMulti style={{padding:padding, left: left, top:top}}/>
              </FormContainer>
          </BoxContainer>
         <RowContainer>
             <Link style={{ textDecoration: 'none', color: 'white' }} to = "/profile">
               <SkillButton onClick={this.props.closePopup}>Cancel</SkillButton>
             </Link>
             <Marginer direction="horizontal" margin="0.5em" />
             <Link style={{ textDecoration: 'none', color: 'white' }} to = "/profile">
               <SkillButton onClick={this.props.closePopup}>Confirm</SkillButton>
             </Link>
         </RowContainer>
      </OuterContainer>
  );
}
}

export const SkillButton = styled.button`
  padding: 10px 10%;
  width: 12em;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  border: #434343;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(1.03);
  }
`;

export class Skillpopup extends Component {
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
  offset = {right:0,left:10}
  render() {
    return (
      <div>
        <SkillButton onClick={this.togglePopup.bind(this)}>Edit Skills</SkillButton>
        <Marginer direction="vertical" margin="1em" />
        {this.state.showPopup ? 
          <Skills
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};
