import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* 1. Importação de fontes */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* reset */
    * {
        letter-spacing: 0.75px;
        font-family: "Poppins", sans-serif;
        padding: 0px;
        margin: 0px;
        border: none;
        outline: none;
        text-decoration: none;
        list-style: none;
        color: black;
        box-sizing: border-box;
    }

/* global */
    :root {
        --primary: #C92071;
        --secondary: #B5B6F2;
        --tertiary: #991956;
        --error: #EE4266;
        --success: #52CA76;
        --warning: #F6AA1C;
        --dark-gray: #1F1F1F;
        --dark-gray-2: #474747;
        --dark-gray-3: #666666;
        --light-gray: #8F8F8F;
        --light-gray-2: #CCCCCC;
        --light-gray-3: #F5F5F5;
        --white: #FFFFFF;
        --radius-button: 10px;
    }

/* general */
    body {
        width: 100%;
        height: 100vh;
    }
    body::-webkit-scrollbar {
        display: none;
    }

/* apllies */

    /* -- apllies position -- */
        .relative { position: relative; }
        .absolute { position: absolute; }

    /* -- apllies display and layout -- */
        .d-flex { display: flex; }
        .flex-col { flex-direction: column; }
        .justi-cont-center { justify-content: center; }
        .justi-cont-sp-between { justify-content: space-between; }
        .align-i-center { align-items: center !important; }

    /* -- apllies widths and heights -- */
        .w-full { width: 100%; }
        .logo-size {
            width: 253px;
            height: 44px;
        }

    /* -- apllies text and fonts -- */
        .letter-sp-075 { letter-spacing: 0.75px; }
        .text-white { color: var(--white); }
        .underline-text {
            color: var(--dark-gray-3);
            text-decoration: underline;
            text-underline-offset: 2px;
        }
        .bold-500 { font-weight: 500; }
        .bold-600 { font-weight: 600; }
        
        .font-13 { font-size: 13px; }
        .font-16 { font-size: 16px; }
        .font-18 { font-size: 18px; }

    /* -- apllies background colors -- */
        .bg-primary { background-color: var(--primary); }
        .bg-light-gray-3 { background-color: var(--light-gray-3); }
        .bg-error { background-color: var(--error); }

        .bg-primary-btn {
            background-color: var(--primary);
            color: var(--white);
        }
        .bg-primary-btn:hover {
            background-color: var(--tertiary);
            color: var(--white);
        }

    /* -- apllies buttons -- */
        .button-general {
            font-weight: 600;
            border-radius: var(--radius-button);
            padding: 13px 40px;
        }

    /* -- apllies others -- */
        .pointer { cursor: pointer; }
        .transiton02s { transition: 0.2s ease-in-out; }

    /* -- apllies main structures -- */
        .header {
            width: 100%;
            padding: 42px 104px 26px 104px;
            display: flex;
            justify-content: space-between;
        }

        .footer {
            padding: 72px 104px;
            width: 100%;
            height: 454px;
            background-color: var(--dark-gray);
        }

`;

export default GlobalStyle;