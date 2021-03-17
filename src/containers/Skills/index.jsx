import React from "react";
import styled from "styled-components";
import { Skills } from "../../components/SkillsBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/Navbar";
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
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0px 0px 2.7px rgba(15, 15, 15, 0.28);
  position: relative; 
  overflow: hidden;
`;





export function EditSkills(props) {
    return(
        <PageContainer>
            <SkillspageContainer>
                <BackgroundFilter>
                    <Navbar />
                    <StyledInnerContainer>
                    <BoxContainer>
                        <Skills />
                    </BoxContainer>
                    </StyledInnerContainer>
                </BackgroundFilter>
            </SkillspageContainer>
            <Footer />
        </PageContainer>
    )

}