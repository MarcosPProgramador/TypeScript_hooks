import React, { useState, useEffect } from 'react'

import {
    Container,
    Profile,
    WrapperBanner,
    Banner,
    WrapperUser,
    Avatar,
    DataName,
    FullName,
    Username,
    Tweets,
    Tab,
    WrapperTweets,
    Load,
} from './sMain'

import Tweet from './Tweet/Tweet'

interface User {
    id: number
    login: string
    avatar_url: string
}

const Main: React.FC = (): JSX.Element => {
    const [user, setUser] = useState<[User]>()
    async function getContent() {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()

        setUser(data)
    }

    useEffect(() => {
        getContent()
    }, [])

    return (
        <Container>
            <Profile>
                <WrapperBanner>
                    <Banner>
                        <img src="" alt="" />
                    </Banner>
                </WrapperBanner>
                <WrapperUser>
                    <Avatar className="bdrs-50p">
                        <img src="" alt="" />
                    </Avatar>
                    <DataName>
                        <FullName className="bdrs-50r nh3"></FullName>
                        <Username className="bdrs-50r nh4"></Username>
                    </DataName>
                </WrapperUser>
            </Profile>
            <Tweets>
                <Tab className="txa-c">Init Tweets</Tab>
                <WrapperTweets>
                    {user ? (
                        user.map((us) => (
                            <Tweet
                                key={us.id}
                                id_user={us.id}
                                login={us.login}
                                avatar={us.avatar_url}
                            />
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
                </WrapperTweets>
            </Tweets>
        </Container>
    )
}

export default Main
