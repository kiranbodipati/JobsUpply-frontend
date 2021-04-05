import React from "react";
import styled from "styled-components";
import Select from 'react-select'
import {Button, JobHave, JobNo} from '../Button/Button'
import { CourseCards, JobCards } from "../Cards/Cards"
import { Link } from 'react-router-dom';
import {CourseDetail} from "../../data"

const OuterContainer = styled.div`
  width: 58%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative; 
  overflow: hidden;
  background: rgb(0,0,0,0.5);
  margin: 2em;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-evenly;
  width: 100%;
  min-height: 50px;
  clear: both;

`;

const RowOneThird = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  min-width:80px;
  min-height:50px;
`;

export const JobContainer = styled.div`
  width: 100%;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 19px;
  margin-top: 0em;
`;

export const CourseContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.2em;
  justify-content: center;
`

export function JobDetail(props){
  return(
        <OuterContainer>
            <JobContainer>
              
                <CourseContainer>
                  {CourseDetail.map((data) =>
                  // <Link className="jobcards__item__link" to="/main">
                    <CourseCards key = {data.id}
                    Title = {data.title}
                    Institution = {data.institution}
                    Rating = {data.rating} 
                    Registered = {data.registered}
                    Duration = {data.duration}/>
                  // </Link>
                )}
                </CourseContainer>
            </JobContainer>
        </OuterContainer>
    )
}