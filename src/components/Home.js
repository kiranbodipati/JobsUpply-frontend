import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import styled from "styled-components";
import TopSectionBackgroundImg from "../Images/bg-orange.png"
import { Marginer} from "./marginer";
import { Link } from "react-router-dom";
import { InnerPageContainer, PageContainer } from "./pageContainer/PageContainerindex";
import { Navbar } from "./Navbar/NavbarBefore";
import { Button } from './Button/Button';
import { Cards } from './Cards/Cards';
import { Footer } from './Footer/FooterIndex';
import { ContentContainer, Sectionhead, TopSectionContainer, TopSectionInnerContainer, BackgroundFilter, HeadlineContainer, SloganText, Line, Title } from "../containers/HomePage/HomePageIndex"

const Home = () => {
  const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <PageContainer>
                <TopSectionContainer>
                    <BackgroundFilter>
                        <Navbar />
                        {/* {children} */}
                        <TopSectionInnerContainer>
                            <HeadlineContainer>
                                <Title size = "30" >YOUR FIRST STEP TO THE WORKING WORLD</Title>
                                <Line />
                                <SloganText>Sign in to see the best job only for you!</SloganText>
                                <Marginer direction = "vertical" margin = {30} />
                                <Link style={{ textDecoration: 'none', color: 'white' }} to = "/login">
                                    <Button buttonStyle='btn-orange'>Get Started!</Button>
                                </Link>
                            </HeadlineContainer>
                        </TopSectionInnerContainer>
                    </BackgroundFilter>
                </TopSectionContainer>
                <InnerPageContainer>
                    <ContentContainer>
                        <Sectionhead>What we have here</Sectionhead>
                        <Cards />
                    </ContentContainer>
                </InnerPageContainer>
            <Footer />
        </PageContainer>
      </header>
    </div>
  );
};

export default Home;