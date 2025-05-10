import styled from "styled-components";
import LogoFooter from "./LogoFooter";
import SvgFacebook from "../assets/facebook.svg";
import SvgInstagram from "../assets/instagram.svg";
import SvgTwitter from "../assets/twitter.svg";

const FooterContainer = styled.footer `

    * {
        color: white;
    }

    & > p {
        margin-top: 20px;
        justify-self: center;
    }

    .main-content-footer {
        display: flex;
        gap: 20px;
        margin-bottom: 25px;
    }

    & hr {
        opacity: 30%;
        border: 1px solid white;
    }

    .digital-college-info {
        width: 310px;
    }

    .digital-college-info p {
        margin-top: 40px;
        line-height: 26px;
    }

    .digital-college-info div {
        width: 124.12px;
        height: auto;
    }

    .social-media {
        margin: 40px 0px;
        display: flex;
        justify-content: space-between;
    }

    .footer-info-field {
        ul {
            width: 250px;
            line-height: 40px;
        }

        ul h6 {
            margin-bottom: 15px;
        }
    }

`;

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="main-content-footer d-flex justi-cont-sp-between">
                <div className="digital-college-info">
                    <LogoFooter />
                    <p className="text-white font-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur fugiat tempora officia incidunt</p>
                    <div className="social-media">
                        <img src={SvgFacebook} alt="" />
                        <img src={SvgInstagram} alt="" />
                        <img src={SvgTwitter} alt="" />
                    </div>
                </div>
                <div className="footer-info-field text-16">
                    <ul>
                        <h6 className="bold-600 font-18">Informação</h6>
                        <li className="font-16"><a href="">Sobre Drip Store</a></li>
                        <li className="font-16"> <a href="">Segurança</a> </li>
                        <li className="font-16"> <a href="">Wishlist</a> </li>
                        <li className="font-16"> <a href="">Blog</a> </li>
                        <li className="font-16"> <a href="">Trabalhe Conosco</a> </li>
                        <li className="font-16"> <a href="">Meus Pedidos</a> </li>
                    </ul>
                </div>
                <div className="footer-info-field text-16">
                    <ul>
                        <h6 className="bold-600 font-18">Categorias</h6>
                        <li className="font-16"><a href="">Camisetas</a></li>
                        <li className="font-16"><a href="">Calças</a></li>
                        <li className="font-16"> <a href="">Bonés</a> </li>
                        <li className="font-16"> <a href="">Headphones</a> </li>
                        <li className="font-16"> <a href="">Tênis</a> </li>
                    </ul>
                </div>
                <div className="footer-info-field text-16">
                    <ul>
                        <h6 className="bold-600 font-18">Contato</h6>
                        <li className="font-16"><a href="">Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</a></li>
                        <li className="font-16"><a href="">(85) 3051-3411</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="text-white font-13">&copy; 2025 Digital College</p>
        </FooterContainer>
    );
}
 
export default Footer;