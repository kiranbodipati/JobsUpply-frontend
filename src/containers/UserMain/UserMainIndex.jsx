import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../Images/bg-masthead.jpg"
import { Marginer} from "../../components/marginer";
import { Link } from "react-router-dom";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer/PageContainerindex";
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/FooterIndex'
import { UserInfo } from '../../components/UserInfo/UserinfoIndex'
import { JobList } from "../../components/Jobs/JobsIndex";
import { UserDetails } from "../../data";

export const TopSectionContainer = styled.div`
    width: 100%;
    height: 700px;
    background: url(${TopSectionBackgroundImg});
    background-position: 10px -100px;
    background-size: cover; 
    display: flex;
    align-items: center;
`;

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(72, 60, 50, 0.75);
    display: flex;
    flex-direction: column;
`;


export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: ${({ size }) => size ? size + "px" : "60px"};
    color: rgb(255, 255, 255, 0.9);
    line-height: 1.2;
    width: 80%;
`;

export function UserMain(props){
    return (
    <PageContainer>
        <TopSectionContainer>
            <BackgroundFilter>
                <Navbar />
                <ContentContainer>
                {UserDetails.map((data) =>
                    <UserInfo key = {data.id}
                    DP = {data.Pic}
                    University = {data.University}
                    Major = {data.Major}
                    Minor = {data.Minor}
                    Skillsss = {data.Skill}/>
                )}
                    <JobList />
                </ContentContainer>
            </BackgroundFilter>
        </TopSectionContainer>
        <Footer />
    </PageContainer>)
}