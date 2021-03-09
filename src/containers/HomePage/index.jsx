import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar";
import { TopSection } from "./topSection";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { Topsection } from "./topSection"
import { Introcards } from "../../components/Introcards";
import { Footer } from "../../components/footer";




const ContentContainer = styled.div`
    width: 100%;
    max-width: ${deviceSize.laptop}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Sectionhead = styled.h1`
    font-weight: 700;
    color: #000;
    margin-top: 50px;
`;

export function HomePage(props){
    return <pageContainer>
        <TopSection>
            <Navbar />
        </TopSection>
        <InnerPageContainer>
            <ContentContainer>
                <Sectionhead>What we have here</Sectionhead>
                <Introcards />
            </ContentContainer>
        </InnerPageContainer>
        <Footer />
    </pageContainer>
}