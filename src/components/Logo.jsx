import LogoHeader from "../assets/logo-header.svg";
import GlobalStyle from "../styles/GlobalStyle";

const Logo = () => {
    return (
        <>
            <img className="logo-size" src={LogoHeader} alt="Logo da empresa" />
        </>
    );
}
 
export default Logo;