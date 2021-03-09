import React from "react";
import styled from "styled-components";

import carimg from "../../images/thumbnails/car.jpg";
import flowerimg from "../../images/thumbnails/flowers.jpg";
import officeimg from "../../images/thumbnails/office.jpg";



const CardContainer = styled.div`
    display: flex;
    overflow: hidden;
    width: 80%;
    min-height: 250px;
    background-color: #fff;
    margin: 0.5em;
    margin-bottom: 1.3em;
    flex: 0 0 33.33333%;
    //max-width: 33.33333%;
`;

const TopContainer = styled.div`
    width: 100%;
    margin: 2em;
`;

const ServiceThumbnail = styled.div`
    width: 100%;
    height: 11em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 15px 14px;
`;

const Title = styled.h2`
    font-size: 20px;
    margin: 10;
    font-weight: 500;
    color: #000;
    justify-content: center;
`;

const Subtitle = styled.h4`
    font-size: 15px;
    width: 100%;
    margin:0;
    font-weight: 500;
    color: #000;
    justify-content: center;
`

export function Introcards(props){
    return(
        <CardContainer>
            <TopContainer>
                <ContentContainer>
                    <ServiceThumbnail>
                        <img src = {carimg} alt = "customised jobs" />
                    </ServiceThumbnail>
                    <Title>Jobs</Title>
                    <Subtitle>Customised by your skills</Subtitle>
                </ContentContainer>
            </TopContainer>
            <TopContainer>
                <ContentContainer>
                    <ServiceThumbnail>
                        <img src = {flowerimg} alt = "best courses recommendation" />
                    </ServiceThumbnail>
                    <Title>Courses</Title>
                    <Subtitle>What you are missing</Subtitle>
                </ContentContainer>
            </TopContainer>
            <TopContainer>
                <ContentContainer>
                    <ServiceThumbnail>
                        <img src = {officeimg} alt = "profile checker" />
                    </ServiceThumbnail>
                    <Title>Critique</Title>
                    <Subtitle>Check LinkedIn profile!</Subtitle>
                </ContentContainer>
            </TopContainer>
        </CardContainer>
    )
}