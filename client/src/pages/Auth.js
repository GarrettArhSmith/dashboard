import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { UserContext } from '../context/UserProvider'

import Card from '../components/Card'
import logo from '../images/logo.png'
import Logo from '../components/Logo'
import AuthBtn from '../components/AuthBtn';
import Blob from '../components/Blob'


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    max-height: 100vh;
    background: linear-gradient(347deg, rgba(255,177,164,1) 35%, rgba(158,71,112,1) 100%);
    overflow: hidden;
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const Input = styled.input`
    align-self: center;
    width: 100%;
    height: 30px;
    padding: 0 0.25rem;
`

const ToggleAuth = styled.p`
    width: auto;
    justify-self: center;
    grid-column: 1/3;
    &:hover {
        cursor: pointer;
        color: navy;
    }
`


function Auth(props) {
    const { login, signup } = useContext(UserContext)
    const [signUp, setSignUp] = useState(true)

    const [inputs, setInputs] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(signUp && inputs.confirmPassword === inputs.password) {
            
            signup({...inputs, roles: ["student"]})
        } else if(!signUp) {
            login(inputs)
        }
    }

    return (
        <Container>
            <div style={{zIndex: 2, marginTop: -50}}>
                {/* <Blob /> */}
                <Logo src={logo} style={{height: 100, margin: "0 auto", width: 150, filter: "invert(1) brightness(200%)"}} />
                <Card width="500px">
                    <h1>{signUp ? "Sign Up" : "Sign In"}</h1>
                    <Form>
                        {signUp && 
                            <>
                            <Label htmlFor="">
                                First Name
                                <Input 
                                    type="text"
                                    name="firstName"
                                    value={inputs.firstName}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label htmlFor="">
                                Last Name
                                <Input 
                                    type="text"
                                    name="lastName"
                                    value={inputs.lastName}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label htmlFor="" style={{gridColumn: "1/3"}}>
                                E-Mail
                                <Input 
                                    type="text"
                                    name="email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label htmlFor="">
                                Password
                                <Input 
                                    type="text"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label htmlFor="">
                                Confirm Password
                                <Input 
                                    type="text"
                                    name="confirmPassword"
                                    value={inputs.confirmPassword}
                                    onChange={handleChange}
                                />
                            </Label>
                            </>
                        }
                        {!signUp && 
                            <>
                            <Label htmlFor="" style={{gridColumn: "1/3"}}>
                                E-Mail
                                <Input 
                                    type="text"
                                    name="email"
                                    value={inputs.email}
                                    onChange={handleChange}
                                />
                            </Label>
                            <Label htmlFor="" style={{gridColumn: "1/3"}}>
                                Password
                                <Input 
                                    type="password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleChange}
                                />
                            </Label>
                            </>
                        }
                        <AuthBtn signUp={signUp} onClick={handleSubmit} />
                        <ToggleAuth onClick={() => setSignUp(prev => !prev)}>
                            {signUp ? "Already have an account?" : "Need an account?"}
                        </ToggleAuth>
                    </Form>
                </Card>
            </div>
        </Container>
    );
}

export default Auth;