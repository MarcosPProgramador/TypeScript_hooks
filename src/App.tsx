import { GlobalStyle } from '@Styles/GlobalStyle'
// import Login from '@Pages/Login/Login'
import Tweets from '@Pages/Tweets/Tweets'
import Navbar from '@Components/Navbar/Navbar'
import Light from '@Components/themes/Light'
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
            <Navbar />
            <Light />
            {/* test */}
            <Tweets />
            {/* <Login /> */}
        </>
    )
}

export default App
