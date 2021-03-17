import React from "react"
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { Introcards } from "../Introcards";

const NavbarContainer = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
`;

const AccessContainer = styled.div`
    display: flex;
`;

const AnchorLink = styled.a`
    font-size: 17px;
    color: rgb(255,255,255,0.65);
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out

    &:hover {
        filter: contrast(0.6);
    }
`;

export function Navbar(props) {
    return (
        <NavbarContainer>
            <BrandLogo />
            <AccessContainer>
                <Link style={{ textDecoration: 'none', color: 'white' }} to = "/">
                    <AnchorLink>About us</AnchorLink>
                </Link>
                <Marginer direction = "horizontal" margin = {30} />
                <Link style={{ textDecoration: 'none', color: 'white' }} to = "/Login">
                    <AnchorLink>Sign up/Log in</AnchorLink>
                </Link>
            </AccessContainer>
        </NavbarContainer>
    )
}