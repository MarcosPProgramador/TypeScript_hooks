import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 760px;
    margin: 0 3px;
`

// Profile
export const Profile = styled.div`
    width: 100%;
    height: max(20vw, 250px);
    @media (max-width: 560px) {
        height: max(40vw, 140px);
    }
`
export const WrapperBanner = styled.div`
    height: 80%;
`
export const Banner = styled.div`
    border-radius: 10px;
    background-color: var(--secondary);
    height: 100%;
`
export const WrapperUser = styled.div`
    padding-left: 2%;
    height: 20%;
    display: flex;
    align-items: center;
`
export const Avatar = styled.div`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    @media (max-width: 568px) {
        width: max(6vw, 20px);
        height: max(6vw, 20px);
    }
    background-color: var(--rgba-0);
`
export const DataName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2%;
`
export const FullName = styled.div`
    animation: width-animate 1s ease forwards;
    width: 0;
    background-color: ${(props) =>
        props.children ? 'transparent' : 'var(--secondary)'};
    height: ${(props) => (props.children ? 'unset' : '10px')};
    @keyframes width-animate {
        0% {
            width: 0;
        }
        100% {
            width: 200px;
        }
    }
`
export const Username = styled.div`
    animation: animate-width 1s ease 200ms forwards;
    width: 0;
    color: var(--text-secondary);
    font-size: 13px;
    margin-top: 5px;
    background-color: ${(props) =>
        props.children ? 'transparent' : 'var(--secondary)'};
    height: ${(props) => (props.children ? 'unset' : '6px')};

    @keyframes animate-width {
        0% {
            width: 0;
        }
        100% {
            width: 100px;
        }
    }
`

// Tweets
export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
`
export const Tab = styled.h4`
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 15px;
    &::after {
        border-radius: 50rem;
        content: '';
        bottom: 6px;
        transform: translateX(-50%);
        left: 50%;
        width: 80px;
        height: 4px;
        background-color: var(--rgba-0);
        position: absolute;
    }
    &::before {
        bottom: 0;
        transform: translateX(-50%);
        left: 50%;
        width: 40px;
        height: 4px;
        background-color: var(--rgba-0);
        position: absolute;
        border-radius: 50rem;
        content: '';
    }
`
export const WrapperTweets = styled.div`
    display: flex;
    flex-direction: column;
`

// animate
export const Load = styled.div`

    & > svg {
        & > path {
            stroke-dasharray: 150;
            stroke: var(--rgba-0);
        }
        animation: animate-load ease 500ms infinite;
        @keyframes animate-load {
            0%,
            100% {
                transform: rotateZ(0);
            }
            50% {
                transform: rotateZ(360deg);
            }
        }
    }
`
