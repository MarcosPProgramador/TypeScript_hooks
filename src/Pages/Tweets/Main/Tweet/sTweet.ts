import styled from 'styled-components'

export const Container = styled.div`
    flex-direction: column;
`
export const UserData = styled.div`
    margin-top: 20px;
`
export const UserAvatar = styled.div`
    background-color: var(--secondary);
    margin-right: 20px;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
`
export const UserName = styled.div`
    font-weight: bold;
    & > span {
        letter-spacing: 1px;
    }
`
export const UserDescription = styled.div`
    color: var(--text-secondary);
`
export const UserImage = styled.div``
export const UserInfo = styled.div``
export const Wrapper = styled.div``
export const LikeIcon = styled.div``
export const Data = styled.div``
export const CommentIcon = styled.div``
export const ShareIcon = styled.div``
