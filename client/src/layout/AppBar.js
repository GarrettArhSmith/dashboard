import React from 'react';
import styled from 'styled-components'

import logo from '../images/logo.png'
import Logo from '../components/Logo'

import Search from '../components/Search'
import ProfilePic from '../components/ProfilePic'
import AuthBtn from '../components/AuthBtn';

const StyledAppBar = styled.div`
    width: 100%;
    height: 80px;
    background: #99bfa6;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 0 3rem 0 1rem;
    place-items: center;
    position: fixed;
    top: 0;
    z-index: 200;
`

function AppBar(props) {
    return (
        <StyledAppBar>
            <Logo src={logo} />
            <Search />
            <ProfilePic />
            {/* <SignInBtn /> */}
        </StyledAppBar>
    );
}

export default AppBar;