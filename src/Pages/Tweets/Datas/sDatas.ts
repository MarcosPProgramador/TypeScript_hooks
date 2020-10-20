import styled, { css } from 'styled-components'
import { Android, Videos, Group } from '@Styles/Icons'
export const Container = styled.div`
    width: 100px;
    margin-top: 15px;
    background-color: var(--primary);
    @media (max-width: 900px){
        width: 50px;
    }
    @media (max-width: 420px){
        z-index: 10;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 15px;
    }
`
export const Wrapper = styled.div`
    position: fixed;
    margin-left: 10px;
    @media (max-width: 420px){
        position: static;

    }
    @media (max-width: 900px){
        margin-right: 13px;
    }
`
export const NavBar = styled.nav`
    padding: 0 2px;
`
export const ListTab = styled.ul`
 @media (max-width: 420px){
     display: flex;
     justify-content: space-around;
 }
    list-style: none;
`
export const Tabs = styled.li`
    margin-top: 12px;
    font-size: 14px;
`
export const Link = styled.a`
    padding: 0 10px;
    color: var(--text);
    text-decoration: none;
    @media (max-width: 900px){
        display: none;
    }
`
const styIcon = css`
    width: 20px;
    height: 20px;
    color: var(--rgba-0);
`
export const HomeIcon = styled(Android)`
    ${styIcon}
`
export const GroupsIcon = styled(Group)`
    ${styIcon}
`
export const VideosIcon = styled(Videos)`
    ${styIcon}
`
