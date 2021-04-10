import React from 'react';
import './Cards.css';
import { CardItem, JobCardItem, CourseCardItem } from './CardItem';
import {UserDetails, PositionDetail} from '../../data'
import Linkedin from "../../Images/LinkedinLogo.jpg";
import Coursera from "../../Images/coursera.png";

export function Cards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='Images/bg-masthead.jpg'
              text='Settings'
              label='Job Title 3'
              path='/se'
            />
            <CardItem
              src='Images/bg-masthead.jpg'
              text='profile-checker'
              label='Job Title 4'
              path='/profile-checker'
            />
            <CardItem
              src='Images/bg-masthead.jpg'
              text='Course recommendation'
              label='Job Title 5 '
              path='/log-out'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export function JobCards(props) {
  let {Jobtitle, Company, Industry, Jobreq} = props;
  return (
    <div className='jobcards'>
      <div className="jobcards__container">
        <div className="jobcards__wrapper">
          <ul className='jobcards__items'>
          {UserDetails.map((data) =>
            <JobCardItem
              src='Images/bg-masthead.jpg'
              text1= {Jobtitle}
              text2= {Company} 
              text3= {Industry}
              text4='Skills needed:  '
              src2 = {Linkedin}
              Userskill = {data.Skill}
              Jobneed = {Jobreq}
            /> 
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SingleJobCard(props) {
  let {Jobtitle, Company, Industry, Jobreq} = props;
  return (
    <div className='jobcards'>
      <div className="jobcards__container">
        <div className="jobcards__wrapper">
          <ul className='jobcards__items'>
          {UserDetails.map((data) =>
            <JobCardItem
              src='Images/bg-masthead.jpg'
              text1= {Jobtitle}
              text2= {Company} 
              text3= {Industry}
              text4='Skills needed:  '
              src2 = {Linkedin}
              Userskill = {data.Skill}
              Jobneed = {Jobreq}
            /> 
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}


export function CourseCards(props) {
  let {Title, Institution, Rating, Registered,Duration} = props;
  return (
    <div className='coursecards'>
      <div className="coursecards__container">
        <div className="coursecards__wrapper">
          <ul className='coursecards__items'>
            <CourseCardItem
              src={Coursera}
              Title={Title}
              Institution={Institution}
              Rating={Rating}
              Registered={Registered}
              Duration={Duration}
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}