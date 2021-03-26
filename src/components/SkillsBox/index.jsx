import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import styled from "styled-components";

const SkillContainer = styled.a`
    justify-content: center;
    width: 80%;
    z-index: 100;
    position: relative;
`;

const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 10,
    }),
  
    control: (_, { selectProps: { width }}) => ({
      width: width
    }),
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
  

const animatedComponents = makeAnimated();

export function Skills() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: '1', label: '12222222222222222222' },
        { value: '2', label: '33333333333333332' },
        { value: '3', label: '33444444444444444' },
        { value: '4', label: '45555555555555555555554' },
        { value: '5', label: '56666666666666665' },
        { value: '6', label: '6677776' },
        { value: '7', label: '77777777777888888888887' },
        { value: '8', label: '88899999999999999998' },
        { value: '9', label: '6544444444449' },
        { value: '11', label: '243333333333331' },
        { value: '22', label: '749527222222222222' },
        { value: '33', label: '47966666666666663' },
        { value: '44', label: '146333333333333' },
        { value: '55', label: '333`3333333335' },
        { value: '66', label: '634' },
        { value: '77', label: '73688888888888888888888888888' },
        { value: '88', label: '8' },
        { value: '99', label: '925555555555555555555555' }
      ]
    return (
        <SkillContainer>
    <Select
      // styles={customStyles}
      closeMenuOnSelect={false}
      components={animatedComponents}
    //   defaultValue={['default 1', 'default 2']}
      isMulti
      options={options}
    />
    </SkillContainer>
  );
}

