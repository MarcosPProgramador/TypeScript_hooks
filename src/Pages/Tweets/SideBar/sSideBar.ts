import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    padding: 50px 10px;
    position: relative;
    @media (max-width: 1108px){
        display: none;
    }
`
export const ContainerFixed = styled.div`
    position: fixed;
`
export const WrapperInput = styled.div`
    position: relative;
`
export const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    border-radius: 50rem;
    width: 10px;
    height: 10px;
    background-color: var(--rgba-0);
`
export const Input = styled.input`
    width: 100%;
    color: var(--text);
    /* () & */
    height: 24px;
    background-color: transparent;

    border-radius: 5px;
    padding: 0 20px;
    border: 1px solid var(--rgba-0);
    &:focus ~ label {
        font-size: 13px;
        left: 30px;
        top: -14px;
    }
    &:valid ~ label {
        font-size: 13px;
        left: 30px;
        top: -14px;
    }
`
export const Label = styled.label`
    transition: 500ms ease;
    transition-property: left, top, font-size;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0;
    pointer-events: none;
    color: var(--text-secondary);
`
export const Users = styled.div`
    & > h2 {
        margin-top: 20px;
        letter-spacing: 1px;
        position: relative;
        &::after {
            position: absolute;
            top: 50%;
            left: -20%;
            content: '';
            background-color: var(--secondary);
            height: 1px;
            width: 30px;
        }
    }
`
export const UserTo = styled.div`
    margin-top: 30px;

`
export const User = styled.div`
    margin-top: 8px;
    justify-content: flex-start;  
`
export const UserAvatar = styled.div`
    width: 35px;
    height: 35px;
    border: 1px solid var(--secondary);
    margin-right: 15px;

`
export const Username = styled.div`
    font-size: 14px;
`
