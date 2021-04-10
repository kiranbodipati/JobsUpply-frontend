import React from "react";
import styled from "styled-components";
import Select from 'react-select'
import { JobCards } from "../Cards/Cards"
import {Button, JobHave, JobNo} from '../Button/Button'
import { Link } from 'react-router-dom';
import './new.css';
import {PositionDetail} from "../../data"

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
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export function JobList(props){
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
            {PositionDetail.map((data) =>
                <Link className="jobcards__item__link" to= '/jobdetails'>
                  <JobCards key = {data.id}
                  Jobtitle = {data.Jobtitle}
                  Company = {data.Company}
                  Industry = {data.Industry} 
                  Jobreq = {data.Skill}/>
                </Link>
              )}
            </JobContainer>
        </OuterContainer>
    )
}