import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* 1. Importação de fontes */
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  /* Reset */
  * {
    letter-spacing: 0.75px;
    font-family: "Poppins", sans-serif;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    text-decoration: none;
    list-style: none;
    color: black;
    box-sizing: border-box;
  }

  /* Global */
  :root {
    /* Colors */
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
        --black: black;
        --light-green: #E7FF86;
        --radius-button: 10px;
        --lalala: rgba(0, 0, 0, 0.742);

    /* Transitions */
        --fade-in-out: 0.2s ease-in-out;
        --slip: 0.1s ease-in-out;
  }

  /* General */
    body {
        width: 100%;
        height: 100vh;
    }

    body::-webkit-scrollbar {
        display: none;
    }

  /* ========================================================================= */
  /* Applies */

  /* Position */
    .relative { position: relative; }
    .absolute { position: absolute; }

  /* Overflow */
    .over-f-hid { overflow: hidden; }

  /* Display and layout */
    .d-flex { display: flex; }
    .d-block { display: block; }
    .d-grid { display: grid; }
    .flex-col { flex-direction: column; }
    .justi-cont-center { justify-content: center; }
    .justi-cont-sp-between { justify-content: space-between; }
    .justi-cont-sp-around { justify-content: space-around; }
    .justi-cont-sp-evenly { justify-content: space-evenly; }
    .align-i-center { align-items: center !important; }

    .box-size { box-sizing: border-box; }

  /* Widths and heights */
    .w-full { width: 100%; }
    .w-half { width: 50%; }
    .w-third { width: calc(100% / 3); }
    .logo-size {
        width: 253px;
        height: 44px;
    }

    .w-fit { width: fit-content; }

  /* Gaps */
    .gap1em { gap: 1em; }

  /* Text and fonts */
    .letter-sp-075 { letter-spacing: 0.75px; }

    .underline-text {
        color: var(--dark-gray-3);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .line-h-28 { line-height:28px; }

    .bold-300 { font-weight: 300; }
    .bold-normal { font-weight: normal; }
    .bold-500 { font-weight: 500; }
    .bold-600 { font-weight: 600; }
    .bold-700 { font-weight: 700; }

    .text-center { text-align: center; }
    .cort { text-decoration: line-through; }

    .font-12 { font-size: 12px; }
    .font-13 { font-size: 13px; }
    .font-14 { font-size: 14px; }
    .font-16 { font-size: 16px; }
    .font-18 { font-size: 18px; }
    .font-23 { font-size: 23px; }
    .font-24 { font-size: 24px; }
    .font-48 { font-size: 48px; }
    .font-64 { font-size: 64px; }
    .font-256 { font-size: 256px; }

  /* Text colors */
    .text-white { color: var(--white); }
    .text-black { color: var(--black); }
    .text-primary { color: var(--primary); }
    .text-warning { color: var(--warning); }
    .text-error { color: var(--error); }
    .text-light-gray { color: var(--light-gray); }
    .text-dark-gray-2 { color: var(--dark-gray-2); }
    .text-success { color: var(--success); }

  /* Background colors */
    .bg-primary { background-color: var(--primary); }
    .bg-white { background-color: var(--white); }
    .bg-light-gray-2 { background-color: var(--light-gray-2); }
    .bg-light-gray-3 { background-color: var(--light-gray-3); }
    .bg-error { background-color: var(--error); }
    .bg-success { background-color: var(--success); }
    .bg-light-green { background-color: var(--light-green); }

    .bg-primary-btn {
        background-color: var(--primary);
        color: var(--white);
    }

    .bg-primary-btn:hover {
        background-color: var(--tertiary);
        color: var(--white);
    }

  /* Buttons */
    .button-general {
        font-weight: 600;
        border-radius: var(--radius-button);
        padding: 12px 40px;
        transition: var(--slip);
    }

  /* Borders */
    .round-full { border-radius: 100%; }
    .round-inf { border-radius: 9999px; }
    .round10 { border-radius: 10px; }
    .round5 { border-radius: 5px; }

  /* Grids */
    .obj-tall2 { grid-row: span 2; }

    .obj-wide2 { grid-column: span 2; }

  /* Others */
    .pointer { cursor: pointer; }

  /* Transitions */
    .transiton02s { transition: var(--fade-in-out); }
    .transiton01s { transition: var(--slip); }

  /* Main structures */
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
  /* Tests */
    .marker {
      border: 1.7px dashed grey;
    }

`;

export default GlobalStyle;
