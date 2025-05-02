import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: "Poppins", sans-serif;
        padding: 0px;
        margin: 0px;
        border: none;
        outline: none;
        text-decoration: none;
        list-style: none;
        color: black;
    }

    :root {
        --primary:#C92071;
        --secondary:#B5B6F2;
        --tertiary:#991956;
        --error:#EE4266;
        --success:#52CA76;
        --warning:#F6AA1C;
        --dark-gray:#1F1F1F;
        --dark-gray-2:#474747;
        --dark-gray-3:#666666;
        --light-gray:#8F8F8F;
        --light-gray-2:#CCCCCC;
        --light-gray-3:#F5F5F5;
        --white:#FFFFFF;

    }

    /* classes */

        .header {
            padding: 42px 104px;
        }

        .logo-size {
            width: 253px;
            height: 44px;
        }

        .letter-sp-075 {
            letter-spacing: 0.75px;
        }

        .d-flex {
            display: flex;
        }

        .justi-cont-center {
            justify-content: center;
        }

        .justi-cont-sp-between {
            justify-content: space-between;
        }

        .align-i-center {
            align-items: center;
        }

        .underline-text {
            text-decoration: underline;
        }

        .pointer {
            cursor: pointer;
        }

    /* classes */

`;

export default GlobalStyle;