import React from 'react';
import styled, { keyframes } from 'styled-components'

const move = keyframes`
    0%   {
        transform: scale(1.5) translate(10px, -30px);
        border-radius: 77% 23% 70% 30% / 30% 30% 70% 70%;
    }
    38%  { 
        transform: scale(1.1, 1) translate(80vw, 30vh) rotate(160deg);
        border-radius: 77% 23% 48% 52% / 63% 30% 70% 37% 
    }
    40%  {
        transform: scale(1.1, 1) translate(80vw, 30vh) rotate(160deg);
        border-radius: 77% 23% 48% 52% / 63% 30% 70% 37% 
    }
    78%  {
        transform: scale(2) translate(0vw, 50vh) rotate(-20deg);
        border-radius: 46% 54% 16% 84% / 48% 79% 21% 52%;
    }
    80%  {
        transform: scale(2) translate(0vw, 50vh) rotate(-20deg);
        border-radius: 46% 54% 16% 84% / 48% 79% 21% 52%;
    }
    100% {
        transform: scale(1.5)   translate(10px, -30px);
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
`
const StyledBlob = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #151E3F;
    width: 300px;
    height: 300px;
    z-index: -1;
    animation: ${move} 30s ease infinite;
    transform-origin: 50% 50%;
    filter: blur(30px);
`

function Blob(props) {

    function randNum(min, max) {
        return Math.floor(Math.random() * max) + min
    }

    return (
        <StyledBlob
            duration={randNum(10, 30)} 
        >
            
        </StyledBlob>
    );
}

export default Blob;