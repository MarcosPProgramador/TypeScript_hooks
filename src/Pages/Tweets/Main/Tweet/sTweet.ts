import styled, { css } from 'styled-components'
import { Comment, SuitHeartFill, ShareFill } from '@Styles/Icons'
export const Container = styled.div`
    flex-direction: column;
    width: 100%;
    max-width: 500px;
`
export const UserData = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
`
export const UserAvatar = styled.div`
    background-color: var(--secondary);
    overflow: hidden;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    & > img {

        width: 100%;
        height: 100%;
    }
`
export const UserName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 13px;
`
export const Name = styled.div`
    font-weight: bold;
    margin-bottom: 3px;
`
export const UserDescription = styled.div`
    color: var(--text-secondary);
`
export const UserImage = styled.div`
    border-radius: 8px;
    overflow: hidden;
    height: min(max(50vw, 137px), 300px);
    background-color: var(--secondary);
    & > div {

        width: 100%;
        height: 100%;
    }
`
export const UserInfo = styled.div`
    padding-bottom: 26px;
    padding-top: 9px;
    display: flex;
    @media (max-width: 400px) {
        justify-content: space-between;
    }
`
export const Wrapper = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: var(--text);
    margin-right: 15px;
    display: flex;
    transition: 500ms ease opacity;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
`
export const Data = styled.div`
    & .qtdd {
        margin: 0 5px 0 10px;
    }
    @media (max-width: 400px) {
        & .nh4 {
            display: none;
        }
    }
`

const styleIcon = css`
    width: 20px;
    height: 20px;
    color: var(--rgba-0);
`

export const LikeIcon = styled(SuitHeartFill)`
    ${styleIcon}
`
export const CommentIcon = styled(Comment)`
    ${styleIcon}
`
export const ShareIcon = styled(ShareFill)`
    ${styleIcon}
`
