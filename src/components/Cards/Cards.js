import React from 'react';
import './Cards.css';
import { CardItem, JobCardItem, CourseCardItem } from './CardItem';
import {Userskill,PositionDetail} from '../../data'

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
            <JobCardItem
              src='Images/bg-masthead.jpg'
              text1= {Jobtitle}
              text2= {Company} 
              text3= {Industry}
              text4='Skills needed:  '
              src2 = 'Images/LinkedinLogo.jpg'
              Userskill = {Userskill}
              Jobneed = {Jobreq}
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CourseCards() {
  return (
    <div className='coursecards'>
      <div className="coursecards__container">
        <div className="coursecards__wrapper">
          <ul className='coursecards__items'>
            <CourseCardItem
              src='Images/coursera.png'
              text1='Some really really long Course Title that can barely fit in here'
              text2='Long and tedious Institution Name'
              text3='Really good or really bad Rating'
              text4='number of people registered'
              text5='9 hours to complete the entire course'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}