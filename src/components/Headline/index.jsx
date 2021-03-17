import React from "react"
import styled from "styled-components";
import { Marginer} from "../../components/marginer";

import { Link } from "react-router-dom";

const HeadlineContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 0;
    font-size: ${({ size }) => size ? size + "px" : "60px"};
    color: rgb(255, 255, 255, 0.9);
    line-height: 1.2;
    width: 80%;
`;

const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: rgb(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 25px;
    width: 70%
`;

const Button = styled.button`
  display: inline-block;
  color: #FFF;
  font-size: 1em;
  font-weight: 700;
  margin: 1em;
  padding: 1.25em 2.25em;
  border: none;
  border-radius: 35px;
  display: block;
  text-transform: uppercase;
  background: rgb(244,98,58);
  cursor: pointer;
  outline: none;
  transition: all 200ms ease-in-out

  &:hover {
        filter: contrast(0.6);
  }
`;

const Line = styled.hr`
  margin: 30px;
  width: 10%;
  border-width: 0.1em;
  border-color: rgb(244,98,58);
`;


export function Headline(props){
    const { textSize } = props;
    return <HeadlineContainer>
        <Title size = {textSize}>YOUR FIRST STEP TO THE WORKING WORLD</Title>
        <Line />
        <SloganText>Sign in to see the best job only for you!</SloganText>
        <Marginer direction = "vertical" margin = {30} />
        <Link style={{ textDecoration: 'none', color: 'white' }} to = "/Login">
            <Button>Get Started!</Button>
        </Link>
    </HeadlineContainer>
}