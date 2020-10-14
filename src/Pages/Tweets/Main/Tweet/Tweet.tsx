import React, { useState, useEffect } from 'react'
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
    Load,
} from './sTweet'

interface User {
    login: string
    avatar_url: string
    site_admin: boolean
}
const Tweet: React.FC = (): JSX.Element => {
    const [user, setUser] = useState<[User]>()
    const description = 'Hello world!'

    const qtdd_comment = 5
    const qtdd_share = 10
    const qtdd_like = 1

    async function getUser(url: string) {
        const response = await fetch(url)
        const data = await response.json()

        setUser(data)
    }
    useEffect(() => {
        getUser('https://api.github.com/users')
    }, [])

    return (
        <Container className="d-f m-0_a">
            {user ? (
                user.map((user) => (
                    <>
                        <UserData className="d-f ai-c">
                            <UserAvatar className="bdrs-50r">
                                <img src={user.avatar_url} alt="" />
                            </UserAvatar>
                            <UserName>
                                <Name className="nh3">{user.login}</Name>
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
                                    <span className="qtdd nh3">
                                        {qtdd_like}
                                    </span>
                                    <span className="nh4">
                                        {qtdd_like > 1 ? 'Curtidas' : 'Curtida'}
                                    </span>
                                </Data>
                            </Wrapper>
                            <Wrapper>
                                <CommentIcon />
                                <Data>
                                    <span className="qtdd nh3">
                                        {qtdd_comment}
                                    </span>
                                    <span className="nh4">
                                        {qtdd_comment > 1
                                            ? 'Comentários'
                                            : 'Comentário'}
                                    </span>
                                </Data>
                            </Wrapper>

                            <Wrapper>
                                <ShareIcon />
                                <Data>
                                    <span className="qtdd nh3">
                                        {qtdd_share}
                                    </span>
                                    <span className="nh4">
                                        {qtdd_share > 1
                                            ? 'Compartilhamentos'
                                            : 'Compartilhamento'}
                                    </span>
                                </Data>
                            </Wrapper>
                        </UserInfo>
                    </>
                ))
            ) : (
                <Load className="bdrs-50p m-0_a mt-2">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 110 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M107 54.5C107 83.2188 83.7188 106.5 55 106.5C26.2812 106.5 3 83.2188 3 54.5C3 25.7812 26.2812 2.5 55 2.5C83.7188 2.5 107 25.7812 107 54.5Z"
                            strokeWidth="5"
                        />
                    </svg>
                </Load>
            )}
        </Container>
    )
}

export default Tweet
