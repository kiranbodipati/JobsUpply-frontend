import React from "react";
import styled from "styled-components";
import InputSkill from "./inputSkill";

const SkillInputBox = styled.input`
  width: 100%;
  height: 26px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid rgb(244,98,58);
  }
`;

const SkillBoxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;



export function Skills(props) {
    return (
        
        <InputSkill />
        
    );
  }