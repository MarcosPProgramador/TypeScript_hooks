import React from 'react'
import { Container } from './sTweets'
import Datas from './Datas/Datas'
import Main from './Main/Main'
import SideBar from './SideBar/SideBar'

const Tweets: React.FC = (): JSX.Element => {
    return (
        <Container className="d-f jc-sb m-0_a">
            <Datas />
            <Main />
            <SideBar />
        </Container>
    )
}

export default Tweets
