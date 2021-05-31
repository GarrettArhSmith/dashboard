import React from 'react';
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const vGray = "#514f4b"

const StyledSearch = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    place-items: center;
    background: rgba(255,255,255,0.4);
    padding-left: .5rem;
    border: 1px solid rgba(0,0,0,0.3);
    transition: 0.2s ease;
`

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 1.5em;
    color: rgba(0,0,0,0.6);
    padding: 0 .2rem 0 .3rem;
    &:focus {
        outline: none;
    }
`

function Search(props) {

    return (
        <StyledSearch>
            <FiSearch size={23} color={"rgba(0,0,0,0.5)"} />
            <StyledInput />
        </StyledSearch>
    );
}

export default Search;