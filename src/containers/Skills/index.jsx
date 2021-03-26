import React from "react";
import styled from "styled-components";
import { Skills } from "../../components/SkillsBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/Navbar";
import { motion } from "framer-motion";
import {InnerPageContainer,  PageContainer } from "../../components/pageContainer";

import TopSectionBackgroundImg from "../../images/bg-masthead.jpg"

const SkillspageContainer = styled.div`
    width: 100%;
    height: 700px;
    background: url(${TopSectionBackgroundImg});
    background-position: 10px -100px;
    background-size: cover; 
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(72, 60, 50, 0.75);
    display: flex;
    flex-direction: column;
`;

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top: 1em;
`;

const BoxContainer = styled.div`
  width: 500px;
  min-height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative; 
  overflow: hidden;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  width: 190%;
  height: 475px;
  border-radius: 0%;
  transform: rotate(0deg);
  z-index: -0;
  top: -400px;
  left: -260px;
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
  );
`;

const HeaderText = styled.h2`
  font-weight: 600;
  color: #fff;
  z-index: 10;
  font-size: 30px;
  line-height: 1.24;
`;

export function EditSkills(props) {
    return(
        <PageContainer>
            <SkillspageContainer>
                <BackgroundFilter>
                    <Navbar />
                    <StyledInnerContainer>
                    <BoxContainer>
                        <BackDrop />
                        <HeaderText>Edit your skills!</HeaderText>
                        <Skills />
                    </BoxContainer>
                    </StyledInnerContainer>
                </BackgroundFilter>
            </SkillspageContainer>
            <Footer />
        </PageContainer>
    )

}