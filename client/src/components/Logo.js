import styled from 'styled-components'

const Logo = styled.div`
    width: 100px;
    height: 100%;
    background: url(${props => props.src}) center no-repeat;
    background-size: contain;
    justify-self: left;
    margin: 0 1rem;
`

export default Logo