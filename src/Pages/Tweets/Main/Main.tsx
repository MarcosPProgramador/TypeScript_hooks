import React from 'react'

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
} from './sMain'
import Tweet from './Tweet/Tweet'
const Main: React.FC = (): JSX.Element => {
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
                    <Tweet />
            
                </WrapperTweets>
            </Tweets>
        </Container>
    )
}

export default Main
