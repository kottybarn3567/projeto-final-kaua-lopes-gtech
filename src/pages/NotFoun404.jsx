import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFContainer = styled.main`
    width: 100vw;
    height: 100vh;

    & h1 {
        margin-top: -30px;
    }

    & p {
        margin-bottom: 40px;
    }

    & a {
        transition: 0.2s ease-in-out;
        transform: translate(0px, 0px);
    }

    & a:hover {
        transform: translate(0px, -2px);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 40%);
    }
`;

const NotFoun404 = () => {
    return (
        <NotFContainer className="d-flex align-i-center justi-cont-center">
            <div className="d-flex align-i-center justi-cont-center flex-col">
                <h1 className="font-256 text-error bold-700">404</h1>
                <p className="text-dark-gray-2">It seems that this page doesn't exist anymore...</p>
                    <NavLink className="button-general bg-primary text-white" to={"/"}>Go Back</NavLink>
            </div>
        </NotFContainer>
    );
}

export default NotFoun404;