import LogoHeader from "./Logo";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputContent = styled.input`

    background-color: rgba(0, 0, 0, 0);

    &::placeholder {
        opacity: 60%;
        color: #666666;
        line-height: 28px;
        font-size: 16px;
        font-weight: 400;
    }
`;

const DivContainer = styled.div `
    margin-left: 27px;
    margin-right: 48px;
    background-color: rgb(71, 71, 71, 4%);
    width: 559px;
    height: 60px;
    padding: 0px 15px 0px 24px;
    border-radius: 8px;
`;

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="d-flex align-i-center">
                    <LogoHeader />
                    <DivContainer className="d-flex align-i-center justi-cont-sp-between">
                        <InputContent className="letter-sp-075" type="text" placeholder="Pesquisar produto..." />
                        <svg className="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0183 18.4852L21.5423 22.0001" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </DivContainer>
                    <div>
                        <Link className="underline-text">Cadastrar-se</Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;