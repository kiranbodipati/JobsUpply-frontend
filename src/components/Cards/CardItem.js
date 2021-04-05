import React from 'react';
import { Link } from 'react-router-dom';
import { Marginer} from "../../components/marginer";
import {Button, JobHave, JobNo} from '../Button/Button'


export function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Cardimage'
              className='cards__item__img' />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export function JobCardItem(props) {
  let {text1, text2, text3, text4, Userskill, Jobneed} = props;
  let Userhave = Jobneed.filter(a => Userskill.some(b => a.id === b.id));  
  let Userdonthave = Jobneed.filter(({ id: id1 }) => !Userskill.some(({ id: id2 }) => id2 === id1));
  return (
    <>
      <li className="jobcards__item">
        <div className="jobcards__item__link">
          <figure className='jobcards__item__pic-wrap'>
            <img src={props.src} alt='nopic'
              className='jobcards__item__img' />
          </figure>
          <div className="jobcards__item__info">
            <h5 className="jobcards__item__text">{text1}</h5>
            <h5 className="jobcards__item__text">{text2}</h5>
            <h5 className="jobcards__item__text">{text3}</h5>
          </div>
          <figure className='jobcards__item__logo-wrap'>
            <img src={props.src2} alt='nopic'
              className='jobcards__item__img' />
          </figure>
        </div>
        <div className="jobcards__item__info2">
        <h5 className="jobcards__item__text">{text4}</h5>
        {Userhave.map((item) =>
          <JobHave key = {item.blablabla}>
            {item.name}
          </JobHave>
        )}
        {Userdonthave.map((item) =>
          <JobNo key = {item.blablabla}>
            {item.name}
          </JobNo>
          )}
        </div>
      </li>
    </>
  );
}

export function CourseCardItem(props) {
  return (
    <>
      <li className="coursecards__item">
        <div className="coursecards__item__link">
          <figure className='coursecards__item__pic-wrap'>
            <img src={props.src} alt='coursera logo'
              className='coursecards__item__img' />
          </figure>
          <div className="coursecards__item__info">
            <h5 className="coursecards__item__text">{props.text1}</h5>
          </div>
        </div>
        <div className="coursecards__item__info2">
          <h5 className="coursecards__item__text">{props.text2}</h5>
          <h5 className="coursecards__item__text">{props.text3}</h5>
          <h5 className="coursecards__item__text">{props.text4}</h5>
          <h5 className="coursecards__item__text">{props.text5}</h5>
        </div>
      </li>
    </>
  );
}

