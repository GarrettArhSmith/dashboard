import React, { useState } from 'react';
import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight, FaBook } from 'react-icons/fa'
import { AiOutlineLineChart } from 'react-icons/ai'
import { IoPeople } from 'react-icons/io5'

const StyledDrawer = styled.nav`
    width: ${props => props.open ? 200 : 80}px;
    height: 100vh;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px 0px;
    padding: 1rem 0;
    background: rgba(41, 38, 34, 0.06);
    position: fixed;
    left: 0;
    z-index: 100;
    overflow: hidden;
    transition: 0.2s ease;
    margin-top: 80px;
    ${'' /* background: $fefefe; */}
`

const NavList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
    padding-left: 0;
`

const Header = styled.li`
    display: grid;
    grid-template-columns: ${props => props.open ? "10fr 1fr" : "1fr"};
    align-items: center;
    text-align: left;
    padding: 0 1rem 1rem 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.15);
`
const Item = styled.li`
    display: grid;
    grid-template-columns: ${props => props.open ? "10fr 1fr" : "1fr"};
    align-items: center;
    place-items: ${props => props.open ? null : "center"};
    text-align: left;
    padding: 0 1rem;
    transition: 0.2s ease;
    overflow: hidden;
    &:hover {
        font-size: 1.1em;
        cursor: pointer;
        background: rgba(0,0,0,0.1);
    }
`

const Icon = styled.div`
    margin-top: 7px;
    transition: 0.2s ease;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    justify-self: center;
    &:hover {
        transform: scale(1.3);
        cursor: pointer;
        background: rgba(0,0,0,0.1);
    }
`

function Drawer({ open, setDrawer }) {

    return (
        <StyledDrawer open={open}>
            <NavList>
                <Header open={open}>
                    {open && <h4>Views</h4>}
                    <Icon onClick={() => setDrawer(prev => !prev)}>
                        {open ?
                        <FaChevronLeft style={{marginRight: 2}} /> :
                        <FaChevronRight style={{marginLeft: 2}} />
                        }
                    </Icon>
                </Header>

                <Item open={open}>
                    {open && <h4>ProgressPoints</h4>}
                    <AiOutlineLineChart style={{marginRight: 2}} />
                </Item>

                <Item open={open}>
                    {open && <h4>Homework</h4>}
                    <FaBook style={{marginRight: 2}} />
                </Item>
                
                <Item open={open}>
                    {open && <h4>Standups</h4>}
                    <IoPeople style={{marginRight: 2}} />
                </Item>
            </NavList>
        </StyledDrawer>
    );
}

export default Drawer;