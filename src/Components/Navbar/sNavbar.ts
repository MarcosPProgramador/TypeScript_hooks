import styled from 'styled-components'
import { Android } from '@Styles/Icons'
export const Wrapper = styled.div`
    height: 100%;
    max-width: 1280px;
`
export const Container = styled.div`
    position: fixed;
    z-index: 20;
    height: 54px;
    width: 100%;
    background-color: var(--secondary);
`
export const Padding = styled.div`
    height: 57px;
`
export const LogoIcon = styled(Android)`
    color: var(--rgba-0);
    width: 40px;
    height: 40px;
`
