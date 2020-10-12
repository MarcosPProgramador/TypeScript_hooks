import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 760px;
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
    @media(max-width: 568px){
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

    background-color: ${(props) =>
        props.children ? 'transparent' : 'var(--secondary)'};
    width: 200px;
    height: ${(props) => (props.children ? 'unset' : '10px')};
`
export const Username = styled.div`
    color: var(--text-secondary);
    font-size: 13px;
    margin-top: 5px;
    background-color: ${(props) =>
        props.children ? 'transparent' : 'var(--secondary)'};
    width: 100px;
    height: ${(props) => (props.children ? 'unset' : '6px')};
`

// Tweets
export const Tweets = styled.div``
export const Tab = styled.div``
export const WrapperTweets = styled.div``
export const Tweet = styled.div``
