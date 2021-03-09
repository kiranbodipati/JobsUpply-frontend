import React from "react";
import styled from "styled-components";
import TopSectionBackgroundImg from "../../images/bg-masthead.jpg"
import { Headline } from "../../components/Headline";


const TopSectionContainer = styled.div`
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

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;

const HeadlineContainer = styled.div`
    display: flex;
    align-items:flex;
    flex-direction: column;
`;


export function TopSection(props){
    const { children } = props;
    return (
    <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
                <HeadlineContainer>
                    <Headline />
                </HeadlineContainer>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>)
}