import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import GeoHealthLogo from "../images/GeoHealth Logo 1.svg";
import User from "../images/person-fill.svg";

import './nav.css';

const Container = styled.div`
    
`;

const MenuItem = styled(Link)`
    font-size: 5vh;
    color: black;
    text-decoration: none;
`;

const Logo = styled.img`
    
`;

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2vh;
    padding-right: 2vh;
    border: 1px solid black;
`;

const NavContainer = styled.div`
    
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  top: 100%;
  right: 0;
  z-index: 1;
  display: ${props => (props.isOpen ? "block" : "none")};
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

const DropdownItem = styled(Link)`
    display: block;
    padding: 10px;
    color: black;
    text-decoration: none;
`;
const Navbar = () => {
    const currentUser = localStorage.getItem("user");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <div id="nav">
            <div id="logo">
                <Logo src={GeoHealthLogo} alt="GeoHealth Logo"/>
                <MenuItem to="/">GeoHealth</MenuItem>
            </div>
            <div id="links">
                <NavItem to="/map">
                    <h3>MAP</h3>
                </NavItem>
                <NavItem to="/resources">
                    <h3>RESOURCES</h3>
                </NavItem>
            </div>

            <div id="profile">
                {currentUser ?
                <MenuItem to="/profile">
                    <Logo src={User} alt="User"/>
                    <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <Dropdown isOpen={isDropdownOpen}>
                        <DropdownItem to="/profile">Profile</DropdownItem>
                        <DropdownItem to="/settings">Settings</DropdownItem>
                        <DropdownItem to="/logout">Logout</DropdownItem>
                    </Dropdown>
                    </div>
                </MenuItem> :
                    <MenuItem to="/login">
                        <Logo src={User} alt="User"/>
                        <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <Dropdown isOpen={isDropdownOpen}>
                            <DropdownItem to="/profile">Profile</DropdownItem>
                            <DropdownItem to="/settings">Settings</DropdownItem>
                            <DropdownItem to="/logout">Logout</DropdownItem>
                        </Dropdown>
                        </div>
                    </MenuItem>
                }

            </div>
        </div>
    )
}

export default Navbar;