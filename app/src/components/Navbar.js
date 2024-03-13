import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import GeoHealthLogo from "../images/GeoHealth Logo 1.svg";
import User from "../images/person-fill.svg";
const Container = styled.div`
    display: flex;
    height: 10vh;
    background-color: rgba(0,0,0,0);
    &:hover {
        background-color: white;
        box-shadow: 0px 20px 20px -20px grey;
    }
    z-index: 4;
`;

const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
    text-decoration: none;
`;

const Logo = styled.img`
    height: 6vh;
    width: 6vh;
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2vh;
    padding-right: 2vh;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: left;
    padding-right: 52vw;
`;

const NavItem = styled(Link)`
    font-size: 1.8vh;
    color: black;
    text-decoration: none;
    padding: 20px 12px 4px 12px;
    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: #676AD5;
        text-underline-offset: 4px;
    }
`;


const Navbar = () => {
    return(
        <Container>
            <ItemContainer>
                <Logo src={GeoHealthLogo} alt="GeoHealth Logo"/>
                <MenuItem to="/">GeoHealth</MenuItem>
            </ItemContainer>
            <NavContainer>
                <NavItem to="/map">
                    <h3>MAP</h3>
                </NavItem>
                <NavItem to="/resources">
                    <h3>RESOURCES</h3>
                </NavItem>
            </NavContainer>
            <ItemContainer id="profile">
                <MenuItem to="/login">
                    <Logo src={User} alt="User"/>
                </MenuItem>
            </ItemContainer>
        </Container>
    )
}

export default Navbar;