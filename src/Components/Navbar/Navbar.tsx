import React from 'react'
import { Container, Wrapper, Padding, LogoIcon } from './sNavbar'
const Navbar: React.FC = (): JSX.Element => {
    return (
        <>
            <Container>
                <Wrapper className="m-0_a d-f ai-c jc-sb">
                    <a href="/" className="d-b">
                        <LogoIcon />
                    </a>
                    
                </Wrapper>
            </Container>
            <Padding />
        </>
    )
}

export default Navbar
