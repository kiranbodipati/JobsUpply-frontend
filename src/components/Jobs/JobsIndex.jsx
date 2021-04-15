import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import Select from 'react-select'
import { JobCards} from "../Cards/Cards"
import {Button, JobHave, JobNo} from '../Button/Button'
import { Link } from 'react-router-dom';
import './new.css';
import {PositionDetail, PositionDetailKiran} from "../../data";
import AuthService from "../../services/auth.service";
import {Login} from "../../containers/Login/LoginIndex";
import Redirect from 'react';
import APIService from "../../services/JobData"
// import AuthService from "./services/auth.service.js";
// import AuthService from "/Users/abhishekvaidyanathan/Desktop/JobsUpply-frontend/src/services/auth.service.js";
// import AuthService from "../../services/auth.service";
// import {Login} from "../../containers/Login/LoginIndex";


const OuterContainer = styled.div`
  width: 58%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative; 
  overflow: hidden;
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

const Industryoptions = [
  { value: 'Select Industry', label: 'Select Industry'},
  { value: 'Industry 1', label: 'Industry 1'},
  { value: 'Industry 2', label: 'Industry 2' },
  { value: 'Industry 3', label: 'Industry 3' },
  { value: 'Industry 4', label: 'Industry 4' }
]

const Sortbyoptions = [
  { value: 'Sort by', label: 'Sort By'},
  { value: 'Most Skill Matched', label: 'Most Skill Matched' },
  { value: 'Least skill Matched', label: 'Least skill Matched' },
]

const SelectIndustry = () => (
  <Select options={Industryoptions} defaultValue = {Industryoptions[0]} />

)

const Sortby = () => (
  <Select options={Sortbyoptions} defaultValue = {Sortbyoptions[0]} classNamePrefix='my-className-prefix'/>
)

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",height:"22px", background:"#F2F1F9", border:"none", padding:"0.5rem", borderRadius: "3px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search"}
    //  onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export function JobList(props){
  // const [currentUser, setCurrentUser] = useState(undefined);
  const [industries, setIndustries] = useState([]);
  const [jobListExtracted, setJobListExtracted] = useState([]);

  useEffect( async () => {
    let recJobs = await APIService.jobQuery();
    console.log(recJobs);
    if (recJobs.length > 0){
      console.log("Success");
      let indust=[];
      let jobListExt=[];
      for(let i=0; i<recJobs.length; i++){
        indust[i]=recJobs[i].queryText;
        let jobs=recJobs[i].jobList;
        for(let j=0; j<jobs.length; j++){
            jobListExt.push(jobs[j]);
        };
      };
      setIndustries(indust);
      setJobListExtracted(jobListExt);
    }

  }, []);
  
  return(
      <OuterContainer>
          <RowContainer>
            <RowOneThird>
            <div className= 'my-className-prefix'>
              <SelectIndustry/>
            </div>
            </RowOneThird>
            <RowOneThird>
            <div className= 'my-className-prefix'>
              <Sortby/>
            </div>
            </RowOneThird>
            <RowOneThird><SearchBar/></RowOneThird>
          </RowContainer>
          <JobContainer>
            {/* {console.log("from inside:")}
            {console.log(recJobs)}
            {console.log(counter)}
            {console.log(response)} */}
            {console.log(industries)}
            {console.log(jobListExtracted)}
          {jobListExtracted.map((data) =>
              <Link className="jobcards__item__link" to= '/jobdetails'>
                <JobCards key = {data.linkedinUrl}
                Jobtitle = {data.title}
                Company = {data.company}
                Industry = "test"
                skills ={data.skills}
                />
              </Link>
            )}
          </JobContainer>
      </OuterContainer>
  )
}