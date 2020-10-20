import React from 'react'
import { Container,
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
} from './sSideBar'

const SideBar: React.FC = (): JSX.Element => {
    return <Container >
        <ContainerFixed>

            <WrapperInput>
                <SearchIcon />
                <form action="">
                    <Input type="text" id="inSearch" required/>
                    <Label htmlFor="inSearch">Pesquise</Label>


                </form>
                
            </WrapperInput>
            <Users>
                <h2 className="nh2">Recomendados</h2>
                <UserTo>

                    <User className="d-f ai-c">
                        <UserAvatar className="bdrs-50r"/>
                        <Username>Marcos</Username>

                    </User>
                    <User className="d-f ai-c">
                        <UserAvatar className="bdrs-50r"/>
                        <Username>Pedro</Username>

                    </User>
                    <User className="d-f ai-c">
                        <UserAvatar className="bdrs-50r"/>
                        <Username>Silvão</Username>

                    </User>

                </UserTo>
            </Users>




        </ContainerFixed>


    </Container>
}

export default SideBar
