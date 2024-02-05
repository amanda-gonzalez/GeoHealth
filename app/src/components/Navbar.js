import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    color: white;
    height: 10vh;
`;

const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
`;

const Navbar = () => {
    return(
        <Container>
            <MenuItem to="/">GeoHealth</MenuItem>
        </Container>
    )
}

export default Navbar;