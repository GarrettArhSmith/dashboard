import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    ${'' /* border: 1px solid lightgray; */}
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 4px 0px;
    padding: 1rem;
    border-radius: 3px;
    background: white;
    width: ${props => props.width ? props.width : "100%"};
    min-height: ${props => props.height};
    min-width: 100px;
    justify-self: center;
`

function Card({ children, width , height}) {
    return (
        <StyledCard 
            width={width}
            height={height}
        >
            {children}
        </StyledCard>
    );
}

export default Card;