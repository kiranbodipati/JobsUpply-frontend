import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  overflow-x: hidden;
  overflow-y: overlay;
  webkit-scrollbar : none;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0vh;
`;

export const MutedLink = styled.a`
  color: rgba(170, 170, 170, 1);
  font-size: 11px;
  font-weight: 500;
  margin: 10px 0;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  color: #F37335;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  margin: 0 3px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;

  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid rgb(244,98,58);
  }
`;
   
export const SubmitButton = styled.button`
padding: 11px 0%;
width: 12em;
flex: center;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;

background: rgb(244,98,58); /* fallback for old browsers */
background: -webkit-linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

&:focus {
  outline: none;
}

&:hover {
  filter: brightness(1.03);
}
`;

export const ConfirmButton = styled.button`
padding: 11px 0%;
width: 27.5em;
flex: center;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;

background: rgb(244,98,58); /* fallback for old browsers */
background: -webkit-linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(
  to right,
  #FDC830,
  rgb(244,98,58)
); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

&:focus {
  outline: none;
}

&:hover {
  filter: brightness(1.03);
}
`;

export const SkillButton = styled.button`
  padding: 10px 10%;
  width: 12em;
  color: #000;
  font-size: 13px;
  font-weight: 600;
  border: #434343;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(1.03);
  }
`;
