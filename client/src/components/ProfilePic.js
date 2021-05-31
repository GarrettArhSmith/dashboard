import React from 'react';
import styled from 'styled-components'

import Initials from './Initials'

const Container = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: rgb(69, 106, 226);
    justify-self: right;
    display: grid;
    place-items: center;
    transition: 0.2s ease;
    &:hover {
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
        filter: brightness(1.05);
        transform: scale(1.05);
        cursor: pointer;
    }
`

function ProfilePic(props) {
    return (
        <Container>
            <Initials />
        </Container>
    );
}

export default ProfilePic;