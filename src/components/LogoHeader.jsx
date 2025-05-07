import LogoHeaderH from "../assets/logo-header.svg";
import GlobalStyle from "../styles/GlobalStyle";

const LogoHeader = () => {
    return (
        <>
            <img className="logo-size" src={LogoHeaderH} alt="Logo da empresa" />
        </>
    );
}
 
export default LogoHeader;