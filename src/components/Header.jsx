import LogoHeader from "./LogoHeader";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputContent = styled.input`

    background-color: rgba(0, 0, 0, 0);
    width: 90%;

    &::placeholder {
        opacity: 60%;
        color: #666666;
        line-height: 28px;
        font-size: 16px;
        font-weight: 400;
    }
`;

const DivContainer = styled.div`
    margin-left: 20px;
    margin-right: 36px;
    background-color: rgb(71, 71, 71, 4%);
    width: 70%;
    height: 60px;
    padding: 0px 15px 0px 24px;
    border-radius: 8px;
`;

const DivContainerAcess = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    .got-products {
        font-weight: 600;
        top: 7px;
        right: -9px;
        border-radius: 100%;
        width: 17px;
        height: 17px;
        font-size: 10px;
        padding: 4px;
    }

    & button {
        font-size: 14px;
    }

    & a {
        font-size: 16px;
    }
`;

const NavContainer = styled.nav `
    display: flex;
    margin: 40px 0px 0px 0px;

    & ul {
        width: 423px;
        display: flex;
        justify-content: space-between;
        
        & li {
            font-size: 16px;
            width: 25%;
            margin: 0px 5px;
            padding: 1px 0px;
            border-bottom: 3px solid #ffffff;
            width: auto;

            &:hover {
                color: #C92071;
                font-weight: 500;
                letter-spacing: 0.7px;
                border-bottom: 3px solid #C92071;
            }
        }
    }
`;

const Header = () => {
    return (
        <>
            <header className="header flex-col">
                <div className="d-flex align-i-center w-full justi-cont-sp-between">

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

{/* ========================================================================================================================== */}

                    <DivContainerAcess className="acessos relative">

                        <Link style={{width: "118px"}} className="underline-text">Cadastrar-se</Link>

                        <button className="button-general bg-primary-btn pointer transiton02s">Entrar</button>

                        <svg className="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42233 19.8203C7.84433 19.8203 8.18733 20.1633 8.18733 20.5853C8.18733 21.0073 7.84433 21.3493 7.42233 21.3493C7.00033 21.3493 6.65833 21.0073 6.65833 20.5853C6.65833 20.1633 7.00033 19.8203 7.42233 19.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.16388" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.1254 10.795H16.8984" stroke="#C92071" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="got-products bg-error d-flex align-i-center justi-cont-center absolute text-white">0</div>

                    </DivContainerAcess>

                </div>
                <NavContainer>
                    <ul className="d-flex">
                        <li className="pointer">Home</li>
                        <li className="pointer">Produtos</li>
                        <li className="pointer">Categorias</li>
                        <li className="pointer">Meus Pedidos</li>
                    </ul>
                </NavContainer>
            </header>
        </>
    );
}

export default Header;