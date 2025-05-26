import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// 1. Importação de fontes
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

// reset
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

// global
    :root {

        // colors
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
        --light-green: #E7FF86;
        --radius-button: 10px;

        // trasitons
        --fade-in-out: 0.2s ease-in-out;
        --slip: 0.1s ease-in-out;
    }

// general
    body {
        width: 100%;
        height: 100vh;
    }
    body::-webkit-scrollbar {
        display: none;
    }

/* ================================================================================== */
// apllies

    // position
        .relative { position: relative; }
        .absolute { position: absolute; }

    // display and layout
        .d-flex { display: flex; }
        .d-block { display: block; }
        .flex-col { flex-direction: column; }
        .justi-cont-center { justify-content: center; }
        .justi-cont-sp-between { justify-content: space-between; }
        .justi-cont-sp-around { justify-content: space-around; }
        .justi-cont-sp-evenly { justify-content: space-evenly; }
        .align-i-center { align-items: center !important; }

    // widths and heights
        .w-full { width: 100%; }
        .w-half { width: 50%; }
        .w-third { width: calc(100% / 3) }
        .logo-size {
            width: 253px;
            height: 44px;
        }

    // gaps
        .gap1em {
            gap: 1em;
        }

    // text and fonts
        .letter-sp-075 { letter-spacing: 0.75px; }

        .underline-text {
            color: var(--dark-gray-3);
            text-decoration: underline;
            text-underline-offset: 2px;
        }

        .bold-normal { font-weight: normal; }
        .bold-500 { font-weight: 500; }
        .bold-600 { font-weight: 600; }
        .bold-700 { font-weight: 700; }

        .text-center { text-align: center; }
        
        .font-13 { font-size: 13px; }
        .font-16 { font-size: 16px; }
        .font-18 { font-size: 18px; }
        .font-23 { font-size: 23px; }
        .font-64 { font-size: 64px; }

    // text colors
        /* #FFFFFF */ .text-white { color: var(--white); }
        /* #C92071 */ .text-primary { color: var(--primary); }
        /* #F6AA1C */ .text-warning { color: var(--warning); } 
        /* #CCCCCC */ .text-dark-gray-2 { color: var(--dark-gray-2) }
        /* #52CA76 */ .text-success { color: var(--success); }

    // background colors
        /* #C92071 */ .bg-primary { background-color: var(--primary); }
        /* #CCCCCC */ .bg-light-gray-2 { background-color: var(--light-gray-2); }
        /* #f5f5f5 */ .bg-light-gray-3 { background-color: var(--light-gray-3); }
        /* #EE4266 */ .bg-error { background-color: var(--error); }
        /* #52ca76 */ .bg-success { background-color: var(--success); }
        /* #E7FF86 */ .bg-light-green { background-color: var(--light-green); }

        .bg-primary-btn { // ##C92071
            background-color: var(--primary);
            color: var(--white);
        }
        .bg-primary-btn:hover {
            background-color: var(--tertiary);
            color: var(--white);
        }

    // buttons
        .button-general {
            font-weight: 600;
            border-radius: var(--radius-button);
            padding: 12px 40px;
        }

    // borders
        .round-full { border-radius: 100%; }
        .round-inf { border-radius: 9999px; }
        .round10 { border-radius: 10px; }
        .round5 { border-radius: 5px; }

    // others
        .pointer { cursor: pointer; }

    // trasitions
        .transiton02s { transition: var(--fade-in-out); }
        .transiton01s { transition: var(--slip); }

    // main structures
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