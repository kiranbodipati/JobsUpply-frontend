import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 24px;
`;

const DropDownContainer = styled.div`
  width: 100%;
  height: 24px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  line-height: 24px;
`;

const DropDownHeader = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  outline: none;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  background: #ffffff;
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  cursor: pointer;
  transition: all 200ms ease-in-out

  &:hover {
        filter: contrast(0.6);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid rgb(244,98,58);
  }
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  padding: 0 10px;
  width: 100%;
  margin: 0;
  position: relative;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: rgba(170, 170, 170, 1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease-in-out

  &:hover {
        filter: contrast(0.6);
        background: rgba(23,35,56, 0.5);
  }
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;




export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  // const options = ["Male", "Female", "Others"];

  const {headname, options} = (props);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || headname }
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}