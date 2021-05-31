import React, { useContext } from 'react';
import styled from 'styled-components'
import { UserContext } from '../context/UserProvider'

const StyledInitials = styled.h2`
    color: white;
    margin-top: -2px;
    margin-left: -1px;
`

function Initials(props) {
    const { user: { firstName, lastName } } = useContext(UserContext)
    
    return (
        <StyledInitials>
            {firstName[0] + lastName[0]}
        </StyledInitials>
    );
}

export default Initials;