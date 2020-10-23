import React, { useState, useEffect, useMemo, useRef } from 'react'
import {
    Container,
    ContainerFixed,
    WrapperInput,
    SearchIcon,
    Input,
    Label,
    Users,
    UserTo,
    User,
    UserAvatar,
    Username,
    UsersOn,
    UsersOnWrapper,
    UsersOnBar,
    UserShow,
} from './sSideBar'
interface User {
    login: string
}
const SideBar: React.FC = (): JSX.Element => {
    const [user, setUser] = useState<[User]>()
    const showRef = useRef<HTMLDivElement>(null)
    async function getContent() {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()

        setUser(data)
    }
    const names = useMemo(() => user?.map((user) => user.login).join(', '), [
        user,
    ])
    useEffect(() => {
        getContent()
    }, [])
    function userOnClick() {
        showRef.current?.classList.toggle('active')
    }

    return (
        <Container>
            <ContainerFixed>
                <WrapperInput>
                    <SearchIcon />
                    <form action="">
                        <Input type="text" id="inSearch" required />
                        <Label htmlFor="inSearch">Pesquise</Label>
                    </form>
                </WrapperInput>
                <Users>
                    <h2 className="nh2">Recomendados</h2>
                    <UserTo>
                        <User className="d-f ai-c">
                            <UserAvatar className="bdrs-50r" />
                            <Username>Marcos</Username>
                        </User>
                        <User className="d-f ai-c">
                            <UserAvatar className="bdrs-50r" />
                            <Username>Pedro</Username>
                        </User>
                        <User className="d-f ai-c">
                            <UserAvatar className="bdrs-50r" />
                            <Username>Silvão</Username>
                        </User>
                    </UserTo>
                </Users>

                <UsersOn>
                    <UsersOnWrapper>
                        <UsersOnBar
                            onClick={userOnClick}
                            className="d-f ai-c bdrs-50r"
                        >
                            <span>Usuários</span>
                            <span></span>
                        </UsersOnBar>
                        <UserShow ref={showRef}>{names}</UserShow>
                    </UsersOnWrapper>
                </UsersOn>
            </ContainerFixed>
        </Container>
    )
}

export default SideBar
