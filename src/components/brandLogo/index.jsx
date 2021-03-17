import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/jobsupply.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "3em")};
  height: ${({ size }) => (size ? size + "px" : "3.5em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.a`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "rgb(255,255,255,0.65)")};
  font-weight: 900;
  margin-left: 6px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out

  &:hover {
        filter: contrast(0.6);
  }
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

export function BrandLogo(props) {
  const { logoSize, textSize, color } = props;

  return (
    <BrandLogoContainer>
        <LogoImage size={logoSize}>
        <img src={LogoImg} alt="Servycing logo" />
        </LogoImage>
        <Link to = "/">
        <LogoTitle size={textSize} color={color}>
          JobsUpply
        </LogoTitle>
        </Link>
    </BrandLogoContainer>
  );
}
