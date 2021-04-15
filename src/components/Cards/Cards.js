import React from 'react';
import './Cards.css';
import { CardItem, JobCardItem, CourseCardItem } from './CardItem';
import {UserDetails, PositionDetail} from '../../data'
import profilechecker from "../../Images/profilechecker.jpg";
import courserecom from "../../Images/courserecom.jpg";
import settings from "../../Images/settings.jpg";
import Linkedin from "../../Images/LinkedinLogo.jpg";
import Coursera from "../../Images/coursera.png";

export function Cards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className='cards__items'>
            <CardItem
              src='Images/settings.jpg'
              text='Settings'
              label='Job Title 3'
              path='/se'
            />
            <CardItem
              src='Images/profilechecker.jpg'
              text='profile-checker'
              label='Job Title 4'
              path='/profile-checker'
            />
            <CardItem
              src='Images/courserecom.jpg'
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

// export function IndustryCard(props) {
//   let {industry, Joblist} = props;
//   console.log(Joblist)
//   return (
//     <div className='jobcards'>
//       <div className="jobcards__container">
//         <div className="jobcards__wrapper">
//           <ul className='jobcards__items'>
//           {Joblist.map((data) =>
//             <JobCards key={data.linkedinUrl}
//               src='Images/bg-masthead.jpg'
//               title= {data.title}
//               company= {data.company} 
//               industry= {industry}
//               skills={data.skills}
//             /> 
//           )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export function JobCards(props) {
  let {Jobtitle, Company, Industry, skills, matched, missing} = props;
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
              matched = {matched}
              missing = {missing}
            /> 
          )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CourseCards(props) {
  let {Title, Institution, Rating, NumRatings} = props;
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
              NumRatings={NumRatings}
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}