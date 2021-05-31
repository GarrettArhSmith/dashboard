import React from 'react';
import styled from 'styled-components'

const StyledTooltip = styled.div`
    background: white;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    color: #555;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    display: flex;
    gap: 0.5rem;
    font-size: 0.8em;
`

const Status = styled.p`
    color: ${props => {
        if(props.value === 0) return "#f47560"
        if(props.value === 1) return "#619bcd"
        if(props.value === 2) return "#61cdbb"
    }};
    font-weight: bold;
`

function Tooltip({data}) {
    return (
        <StyledTooltip>
            {data.day}
            <Status value={data.value}>
                {data.value === undefined && "No Data"}
                {data.value === 0 && "Missed"}
                {data.value === 1 && "Slacked"}
                {data.value === 2 && "Attended"}
            </Status>
        </StyledTooltip>
    );
}

export default Tooltip;