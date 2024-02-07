import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    color: white;
    height: 10vh;
    justify-content: space-between;
`;

const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
`;

const Navbar = () => {
    return(
        <Container>
            <MenuItem to="/">GeoHealth</MenuItem>
            <MenuItem to="/login">Login</MenuItem>
        </Container>
    )
}

export default Navbar;