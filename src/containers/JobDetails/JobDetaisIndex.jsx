import React from 'react';
import { useState, useEffect } from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../Images/bg-orange.png";
import { Marginer} from "../../components/marginer";
import { Link } from "react-router-dom";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer/PageContainerindex";
import { Navbar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/FooterIndex'
import { UserInfo } from '../../components/UserInfo/UserinfoIndex'
import { JobDetail } from'../../components/JobDetails/JobDetails'
import { UserDetails } from "../../data";
import AuthService from "../../services/auth.service";
import {Login} from "../../containers/Login/LoginIndex";
import Redirect from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export const TopSectionContainer = styled.div`
    width: 100%;
    height: 683px
    ;
    background: url(${TopSectionBackgroundImg});
    background-size: cover; 
    display: flex;
    align-items: center;
`;

export const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(72, 60, 50, 0);
    display: flex;
    flex-direction: column;
`;


export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    overflow: auto;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: ${({ size }) => size ? size + "px" : "60px"};
    color: rgb(255, 255, 255, 0.9);
    line-height: 1.2;
    width: 80%;
`;

export function JobDetails(props){

    const [currentUser, setCurrentUser] = useState({token:"temp", user: UserDetails});

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser({token: user.token, user: [user.user,]});
            console.log(currentUser)
        }
        else {
            console.log("oops")
        }
        // if(!currentUser) {
        //     console.log(currentUser);
        //    return ( <Login/>)};
    }, []);

    return (
    <PageContainer>
        <TopSectionContainer>
            <BackgroundFilter>
                <Navbar />
                <ContentContainer>
                
                    {UserDetails.map((data) =>
                        <UserInfo key = {data.id}
                        Name = {data.Name}
                        University = {data.University}
                        Major = {data.Major}
                        Minor = {data.Minor}
                        Skillsss = {data.Skill}/>
                    )}
                    <JobDetail/>
                </ContentContainer>
            </BackgroundFilter>
        </TopSectionContainer>
        <Footer />
    </PageContainer>)
}