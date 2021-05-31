import React from 'react';
import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'

const Button = styled.button`
    background: rgb(69, 106, 226);
    border: none;
    border-radius: 3px;
    display: flex;
    gap: 5px;
    padding: 5px 8px;
    color: white;
    transition: 0.2s ease;
    font-size: 1.2em;
    place-items: center;
    grid-column: 1/3;
    place-self: center;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
    &:focus {
        outline: none;
    }
`

function SignInBtn({ signUp, onClick }) {
    return (
        <Button onClick={onClick}>
            <FaUserCircle />
            <h4>{signUp ? "Sign Up" : "Sign In"}</h4>
        </Button>
    );
}

export default SignInBtn;