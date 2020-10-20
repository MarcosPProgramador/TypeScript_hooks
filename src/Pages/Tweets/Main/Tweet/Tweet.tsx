import React from 'react'
import {
    Container,
    UserData,
    UserAvatar,
    UserName,
    Name,
    UserDescription,
    UserImage,
    UserInfo,
    Wrapper,
    Data,
    LikeIcon,
    CommentIcon,
    ShareIcon,
} from './sTweet'

// interface User {
//     login: string
//     avatar_url: string
//     site_admin: boolean
// }

type User = {
    login: string
    avatar: string
    id_user: number
}
const Tweet = ({ login, avatar, id_user }: User): JSX.Element => {


    // init Gambiarra : - (
    const description = 'Hello world!'

    const qtdd_comment = 5
    const qtdd_share = 10
    // end
    return (
        <Container className="d-f m-0_a">
            <UserData className="d-f ai-c">
                <UserAvatar className="bdrs-50r">
                    <img src={avatar} alt={login} />
                </UserAvatar>
                <UserName>
                    <Name className="nh3">{login}</Name>
                    <UserDescription className="nh4">
                        {description}
                    </UserDescription>
                </UserName>
            </UserData>
            <UserImage>
                <div></div>
            </UserImage>

            <UserInfo>
                <Wrapper>
                    <LikeIcon />
                    <Data>
                        <span className="qtdd nh3">{id_user}</span>
                        <span className="nh4">
                            {id_user > 1 ? 'Curtidas' : 'Curtida'}
                        </span>
                    </Data>
                </Wrapper>
                <Wrapper>
                    <CommentIcon />
                    <Data>
                        <span className="qtdd nh3">{qtdd_comment}</span>
                        <span className="nh4">
                            {qtdd_comment > 1 ? 'Comentários' : 'Comentário'}
                        </span>
                    </Data>
                </Wrapper>

                <Wrapper>
                    <ShareIcon />
                    <Data>
                        <span className="qtdd nh3">{qtdd_share}</span>
                        <span className="nh4">
                            {qtdd_share > 1
                                ? 'Compartilhamentos'
                                : 'Compartilhamento'}
                        </span>
                    </Data>
                </Wrapper>
            </UserInfo>
        
        </Container>
    )
}

export default Tweet
