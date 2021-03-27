
import React from "react";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox/AccountIndex";
import { Footer } from "../../components/Footer/FooterIndex";
import { Navbar } from "../../components/Navbar/Navbar";
import {InnerPageContainer,  PageContainer } from "../../components/pageContainer/PageContainerindex";

import TopSectionBackgroundImg from "../../Images/bg-masthead.jpg"

const Loginpagecontainer = styled.div`
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


export function Login(props) {
    return(
        <PageContainer>
            <Loginpagecontainer>
                <BackgroundFilter>
                    <Navbar />
                    <StyledInnerContainer>
                        <AccountBox />
                    </StyledInnerContainer>
                </BackgroundFilter>
            </Loginpagecontainer>
            <Footer />
        </PageContainer>
    )

}