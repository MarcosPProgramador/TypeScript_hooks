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
                selection: '#7c7d8d',
                primary: '#cdcdd6',
                secondary: '#7c7d8d',
                text: '#111',
                'text-secondary': '#495057',
                'rgba-0': '#ffffff',
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
