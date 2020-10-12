import styled from 'styled-components'

export const Container = styled.div`
    bottom: 50px;
    right: 35px;
    z-index: 10;
    position: fixed;
`
export const Input = styled.input`
    &:checked ~ label div{
        left: unset;
        right: 2px;
    }
    

`
export const ContainerLight = styled.label`
    &:active div{
        width: 46px;
    }
    width: 50px;
    height: 22px;
    background-color: var(--secondary);
    position: relative;
`
export const Ball = styled.div`
    transition: 100ms width ease-in-out;
    position: absolute;
    background-color: var(--primary);
    width: 18px;
    top: 2px;
    bottom: 2px;
    left: 2px;
`