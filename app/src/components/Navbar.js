import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import GeoHealthLogo from "../images/GeoHealth Logo 1.svg";
import User from "../images/person-fill.svg";
const Container = styled.div`
    display: flex;
    color: white;
    height: 10vh;
    justify-content: space-between;
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

const Navbar = () => {
    return(
        <Container>
            <ItemContainer>
                <Logo src={GeoHealthLogo} alt="GeoHealth Logo"/>
                <MenuItem to="/">GeoHealth</MenuItem>
            </ItemContainer>
            <ItemContainer>
                <Logo src={User} alt="User"/>
            </ItemContainer>
        </Container>
    )
}

export default Navbar;