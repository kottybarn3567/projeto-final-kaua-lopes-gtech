import styled from "styled-components";
import Tenis from "../assets/images/product-for-listing.png";

const CardContainer = styled.div `
    color: green;
    height: auto;

    & .offer {
        top: 13px;
        left: 13px;
        background-color: #E7FF86;
        width: fit-content;
        padding: 7px 10px;
        border-radius: 999px;
    }

    & .description {
        margin-top: 21px;
        width: 312.6px;

        .prices {
            gap: 10px;
        }

        & p {
            & span {
                text-decoration: none;
            }
        }
    }

    & .image {
        box-shadow: 6px 16px 30px 0px #6962620D;
        border-radius: 5px;
        background-color: white;
        height: 321px;
        & img {
            top: 25%;
            left: 10px;
            width: 255px;
            rotate: -30deg;
        }
    }
`;

const ProductCard = ({ type, name, old_price, new_price, offer_num }) => {
    return (
        <CardContainer className="d-flex flex-col relative">
            <div className="image relative">
                <img className="absolute" src={Tenis} alt="" />
            </div>
            <div className="description d-flex flex-col">
                <p className="bold-700 font-12 text-light-gray">{type}</p>
                <h4 className="text-dark-gray-2 bold-normal font-24">{name}</h4>
                <div className="prices d-flex">
                    <p className="font-24 bold-300 cort text-light-gray">{old_price}</p>
                    <p className="font-24 bold-700 black">{new_price}</p>
                </div>
            </div>
            <div className="offer absolute">
                <p className="text-dark-gray-2">{offer_num}</p>
            </div>
        </CardContainer>
    );
}
 
export default ProductCard;