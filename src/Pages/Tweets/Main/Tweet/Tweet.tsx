import React from 'react'
import {
    Container,
    UserData,
    UserAvatar,
    UserName,
    UserDescription,
    UserImage,
    UserInfo,
    Wrapper,
    Data,
    LikeIcon,
    CommentIcon,
    ShareIcon,
} from './sTweet'
const Tweet: React.FC = (): JSX.Element => {
    return (
        <Container className="d-f">
            <UserData className="d-f ai-c">
                <UserAvatar className="bdrs-50r">
                    <img src="" alt="" />
                </UserAvatar>
                <UserName>
                    <span className="nh3">Marcos Proença</span>
                    <UserDescription>
                        <span className="nh4">Bom diaaAaA</span>
                    </UserDescription>
                </UserName>
            </UserData>

            <UserImage>
                <img src="" alt="" />
            </UserImage>

            <UserInfo>
                <Wrapper>
                    <LikeIcon />
                    <Data>
                        <span>12</span>
                        <span>Curtidas</span>
                    </Data>
                </Wrapper>
                <Wrapper>
                    <CommentIcon />
                    <Data>
                        <span>86</span>
                        <span>Comentários</span>
                    </Data>
                </Wrapper>

                <Wrapper>
                    <ShareIcon />
                    <Data>
                        <span>1</span>
                        <span>Compartilhamentos</span>
                    </Data>
                </Wrapper>
            </UserInfo>
        </Container>
    )
}

export default Tweet
