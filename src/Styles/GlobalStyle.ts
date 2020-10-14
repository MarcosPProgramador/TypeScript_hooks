import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        appearance: none;
        box-sizing: border-box; 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    html, body, #root{
        height: 100%;
        min-width: 260px;
        min-height: 100vh;
    }
    ::selection{
        background-color: var(--rgba-0);
        color: var(--selection);
    }
    :root{
        --selection: #fff;
        --primary: #2c2e3e;
        --secondary: #474a5f;
        --text : #fff; 
        --text-secondary: #8d99ae; 
        --rgba-0: #2f9d;
    }

    #root{
        width: 100%;
        position: fixed;
        overflow-x: hidden;
        overflow-y: auto;
        color: var(--text); 
        background-color: var(--primary);
    }

    /* framework */

    /* font */
    .nh1{
       font-size: min(26px, max(5vw, 14px)); 
       line-height: min(20px, max(5vw, 13px));
    }
    .nh2{
       font-size: min(19px, max(3vw, 14px)); 
       line-height: min(17px, max(3vw, 12px)); 
    }
    .nh3{
       font-size: min(15px, max(2vw, 10px)); 
       line-height: min(15px, max(2vw, 10px)); 
    }
    .nh4{
       font-size: min(12px, max(1vw, 10px)); 
       line-height: min(12px, max(1vw, 10px)); 
    }
    /* rounded */
    .bdrs-50p{
        border-radius: 50%;
    }
    .bdrs-50r{
        border-radius: 50rem;
    }
    /* text */
    .txa-c{
        text-align: center;
    }
    .txtrsc{
        text-transform: capitalize;
    }
    /* display */
    .d-n{
        display: none;
    }
    .d-b{
        display: block;
    }
    .d-ib{
        display: inline-block;
    }
    .d-f{
        display: flex;
    }
    /* margin */
    .m-0_a{
        margin: 0 auto;
    }
    .mb-1{
        margin-bottom: 10px;
    }
    .mt-2{
        margin-top: 20px;
    }
    .ml-1{
        margin-left: 10px;
    }

    /* flex */
    .ai-c{
        align-items: center;
    }
    .jc-c{
        justify-content: center;
    }
    .jc-sb{
        justify-content: space-between;
    }
    
    .c-p{
        cursor: pointer;
    }
`
