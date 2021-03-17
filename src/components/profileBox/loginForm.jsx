import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  SkillButton
} from "./common";
import Dropdown from "./dropdown";

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
  margin-top: -15px;
`;

const RowLeft = styled.div`
  width: 40%;
  text-align: left;
  float: left;
`;

const RowRight = styled.div`
  width: 60%;
  padding-left: 10px;
  text-align: left;
  float: left;
`;

export function LoginForm(props) {
  const University = ["NTU","NUS","SMU","SUTD","SUSS","SIM"]
  const Major = ["DSAI","CS","CE"];
  const Minor = ["Business","Art","Biology"];

  return (
    <BoxContainer>
      <FormContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Name</InnerText>
          </RowLeft>
          <RowRight>
            <Input placeholder="Full Name" />
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>University</InnerText>
          </RowLeft>
          <RowRight>
            <Dropdown headname = "University" options = {University}/>
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Major</InnerText>
          </RowLeft>
          <RowRight>
            <Dropdown headname = "Major" options = {Major}/>
          </RowRight>
        </RowContainer>
        <RowContainer>
          <RowLeft>
            <InnerText>Minor</InnerText>
          </RowLeft>
          <RowRight>
            <Dropdown headname = "Minor" options = {Minor}/>
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
      {/* <Marginer direction="vertical" margin="1em" /> */}
      <SkillButton>Edit Skills</SkillButton>
      <Marginer direction="vertical" margin="2em" />
      <SubmitButton>Confirm</SubmitButton>
      <Marginer direction="vertical" margin={5} />

    </BoxContainer>
  );
}
