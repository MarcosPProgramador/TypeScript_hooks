import React from 'react'
import {
    Container,
    Wrapper,
    NavBar,
    ListTab,
    Tabs,
    HomeIcon,
    Link,
    GroupsIcon,
    VideosIcon,
} from './sDatas'
const Datas: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Wrapper>
                <NavBar>
                    <ListTab>
                        <Tabs className="d-f">
                            <HomeIcon />
                            <Link href="/">Home</Link>
                        </Tabs>
                        <Tabs>
                            <GroupsIcon />
                            <Link href="/">Groups</Link>
                        </Tabs>
                        <Tabs>
                            <VideosIcon />
                            <Link href="/">Videos</Link>
                        </Tabs>
                    </ListTab>
                </NavBar>
            </Wrapper>
        </Container>
    )
}

export default Datas
