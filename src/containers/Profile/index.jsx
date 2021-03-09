import React from "react";
import styled from "styled-components";
import { ProfileBox } from "../../components/profileBox";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/Navbar";
import {InnerPageContainer,  PageContainer } from "../../components/pageContainer";

import TopSectionBackgroundImg from "../../images/bg-masthead.jpg"

const ProfilepageContainer = styled.div`
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


export function ProfileEdit(props) {
    return(
        <PageContainer>
            <ProfilepageContainer>
                <BackgroundFilter>
                    <Navbar />
                    <StyledInnerContainer>
                        <ProfileBox />
                    </StyledInnerContainer>
                </BackgroundFilter>
            </ProfilepageContainer>
            <Footer />
        </PageContainer>
    )

}