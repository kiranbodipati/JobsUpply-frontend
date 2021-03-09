import React from "react";
import { Marginer } from "../marginer";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  SkillButton
} from "./common";
import Dropdown from "./dropdown";

export function LoginForm(props) {
  const University = ["NTU","NUS","SMU","SUTD","SUSS","SIM"]
  const Major = ["DSAI","CS","CE"];
  const Minor = ["Business","Art","Biology"];

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Full Name" />
        <Dropdown headname = "University" options = {University}/>
        <Dropdown headname = "Major" options = {Major}/>
        <Dropdown headname = "Minor" options = {Minor}/>
        <Input placeholder = "LinkedIn URL" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SkillButton>Edit Skills</SkillButton>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton>Confirm</SubmitButton>
      <Marginer direction="vertical" margin={5} />

    </BoxContainer>
  );
}
