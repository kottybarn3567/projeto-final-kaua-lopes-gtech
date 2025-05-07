import styled from "styled-components";
import LogoFooter from "./LogoFooter";

const FooterContainer = styled.footer `

    & hr {
        opacity: 30%;
        border: 1px solid white;
    }

    .digital-college-info {

    }
`;

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="d-flex flex-col justi-cont-sp-between">
                <div className="digital-college-info">
                    <LogoFooter />
                </div>
            </div>
            <hr />
        </FooterContainer>
    );
}
 
export default Footer;