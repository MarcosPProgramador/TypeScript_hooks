import { GlobalStyle } from '@Styles/GlobalStyle'
import Light from '@Components/themes/Light'
import Router from './Router'
// useRef,
// useMemo,
// useState,
// useEffect,
// useContext,
// useReducer,
// useCallback,
// useImperativeHandle,
import React from 'react'

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Light />
            <Router />
        </>
    )
}

export default App
