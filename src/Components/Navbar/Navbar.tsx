import React from 'react'
import {
    Container,
    Wrapper,
    Padding,
    LogoIcon,
    NavbarN,
    NavbarTab,
    NavbarTabEl,
} from './sNavbar'
import { Link } from 'react-router-dom'
const Navbar: React.FC = (): JSX.Element => {
    return (
        <>
            <Container>
                <Wrapper className="m-0_a d-f ai-c jc-sb">
                    <Link to="/" className="d-b">
                        <LogoIcon />
                    </Link>
                    <NavbarN>
                        <NavbarTab>
                            <NavbarTabEl>
                                <Link to="/">Home</Link>
                            </NavbarTabEl>
                            <NavbarTabEl>
                                <Link to="/Tweets">Tweets</Link>
                            </NavbarTabEl>
                        </NavbarTab>
                    </NavbarN>
                </Wrapper>
            </Container>
            <Padding />
        </>
    )
}

export default Navbar
