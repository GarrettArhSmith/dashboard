import React from 'react';
import styled from 'styled-components'

const StyledContent = styled.div`
    padding: 1rem;
    margin-top: 80px;
    margin-left: ${props => props.drawerWidth}px;
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    height: 100vh;
    overflow: hidden;
    transition: 0.2s ease;
    grid-gap: 1rem;
`

function Content({ children, drawerWidth }) {
    return (
        <StyledContent drawerWidth={drawerWidth}>
            {children}
        </StyledContent>
    );
}

export default Content;