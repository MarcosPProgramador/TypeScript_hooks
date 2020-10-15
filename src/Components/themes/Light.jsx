import React from 'react'
import { Container, ContainerLight, Ball, Input } from './sLight'

const Light = () => {
    function changeColors(colors) {
        const html = l('html')

        const _key = (key) => '--' + key

        Object.keys(colors).map((key) =>
            html.style.setProperty(_key(key), colors[key])
        )
    }
    function themes({ target }) {
        const [dark, light] = [
            {
                selection: '#fff',

                primary: '#2c2e3e',
                secondary: '#474a5f',
                text: '#fff',
                'text-secondary': '#8d99ae',
                'rgba-0': '#2f9d',
            },
            {
                selection: '#fff',
                primary: '#f0f2f4',
                secondary: '#98a1b3',
                text: '#2b303b',
                'text-secondary': '#6c7893',
                'rgba-0': '#26F7FD',
            },
        ]

        target.checked ? changeColors(light) : changeColors(dark)
    }
    const l = (e) => document.querySelector(e)

    return (
        <Container>
            <Input
                type="checkbox"
                name=""
                id="ondarkOnlight"
                className="d-n"
                onChange={themes}
            />
            <ContainerLight
                htmlFor="ondarkOnlight"
                className="bdrs-50r d-b c-p"
            >
                <Ball className="bdrs-50r" />
            </ContainerLight>
        </Container>
    )
}

export default Light
