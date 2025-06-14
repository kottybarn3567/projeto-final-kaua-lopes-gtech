import styled from "styled-components";
import Tenis from "../assets/images/product-for-listing.png";
import GalleryTwo from "../components/GalleryTwo";

const GalleryContainer = styled.main`
    padding: 104px;
    background-color: #F9F8FE;

    & .product-focus {
        gap: 30px;
        height: auto;
        display: flex;

        & .slide {
            width: 58%;
        }

        & .info {
            padding: 20px;
            width: 46%;

            & .rate {
                margin-top: 10px;
                margin-bottom: 20px;
                gap: 10px;
            }

            & .rate span {
                padding: 1px 5px;
                border-radius: 3px;
            }
        }
    }
`;

const ProductViewPage = () => {
    return (
        <GalleryContainer>
            <section className="product-focus">
                <GalleryTwo />
                <div className="info">
                    <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
                    <p className="bold-500 font-12 text-dark-gray-2">
                        Casual | Nike | REF: 3218934271894
                    </p>
                    <div className="rate d-flex align-i-center">
                        <svg width="94" height="16" viewBox="0 0 94 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.61294 1.2306L10.4622 5.65038L15.1966 6.06108C15.5249 6.08972 15.6585 6.50343 15.4092 6.72122L11.8182 9.86292L12.8943 14.5367C12.9689 14.8614 12.6204 15.1169 12.3383 14.9443L8.26965 12.4666L4.20097 14.9443C3.91814 15.1162 3.57037 14.8607 3.645 14.5367L4.72113 9.86292L1.12932 6.72047C0.88006 6.50268 1.0129 6.08896 1.342 6.06033L6.07636 5.64962L7.92562 1.2306C8.05398 0.923134 8.48458 0.923134 8.61294 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                            <path d="M27.9962 1.2306L29.8455 5.65038L34.5799 6.06108C34.9082 6.08972 35.0418 6.50343 34.7925 6.72122L31.2015 9.86292L32.2776 14.5367C32.3522 14.8614 32.0037 15.1169 31.7216 14.9443L27.653 12.4666L23.5843 14.9443C23.3014 15.1162 22.9537 14.8607 23.0283 14.5367L24.1044 9.86292L20.5126 6.72047C20.2634 6.50268 20.3962 6.08896 20.7253 6.06033L25.4597 5.64962L27.3089 1.2306C27.4373 0.923134 27.8679 0.923134 27.9962 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                            <path d="M47.381 1.2306L49.2303 5.65038L53.9646 6.06108C54.293 6.08972 54.4266 6.50343 54.1773 6.72122L50.5862 9.86292L51.6624 14.5367C51.737 14.8614 51.3885 15.1169 51.1064 14.9443L47.0377 12.4666L42.969 14.9443C42.6862 15.1162 42.3384 14.8607 42.4131 14.5367L43.4892 9.86292L39.8974 6.72047C39.6481 6.50268 39.781 6.08896 40.1101 6.06033L44.8444 5.64962L46.6937 1.2306C46.822 0.923134 47.2526 0.923134 47.381 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                            <path d="M66.7667 1.2306L68.616 5.65038L73.3504 6.06108C73.6787 6.08972 73.8123 6.50343 73.5631 6.72122L69.972 9.86292L71.0481 14.5367C71.1227 14.8614 70.7742 15.1169 70.4921 14.9443L66.4235 12.4666L62.3548 14.9443C62.0719 15.1162 61.7242 14.8607 61.7988 14.5367L62.8749 9.86292L59.2831 6.72047C59.0339 6.50268 59.1667 6.08896 59.4958 6.06033L64.2302 5.64962L66.0794 1.2306C66.2078 0.923134 66.6384 0.923134 66.7667 1.2306Z" fill="#F6AA1C" stroke="#F6AA1C" />
                            <path d="M86.151 1.2306L88.0003 5.65038L92.7346 6.06108C93.063 6.08972 93.1966 6.50343 92.9473 6.72122L89.3563 9.86292L90.4324 14.5367C90.507 14.8614 90.1585 15.1169 89.8764 14.9443L85.8077 12.4666L81.7391 14.9443C81.4562 15.1162 81.1085 14.8607 81.1831 14.5367L82.2592 9.86292L78.6674 6.72047C78.4181 6.50268 78.551 6.08896 78.8801 6.06033L83.6144 5.64962L85.4637 1.2306C85.5921 0.923134 86.0227 0.923134 86.151 1.2306Z" stroke="#F6AA1C" />
                        </svg>
                        <span className="bg-warning">4.7 <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.61294 1.2306L10.4622 5.65038L15.1966 6.06108C15.5249 6.08972 15.6585 6.50343 15.4092 6.72122L11.8182 9.86292L12.8943 14.5367C12.9689 14.8614 12.6204 15.1169 12.3383 14.9443L8.26965 12.4666L4.20097 14.9443C3.91814 15.1162 3.57037 14.8607 3.645 14.5367L4.72113 9.86292L1.12932 6.72047C0.88006 6.50268 1.0129 6.08896 1.342 6.06033L6.07636 5.64962L7.92562 1.2306C8.05398 0.923134 8.48458 0.923134 8.61294 1.2306Z" fill="#ffffff" stroke="#ffffff" />
                        </svg>
                        </span>
                        <p className="font-14 bold-500 text-light-gray">(90 classificações)</p>
                    </div>
                    <hgroup style={{width: "160px"}} className="d-flex align-i-center justi-cont-sp-between">
                        <h2 className="font-32 text-dark-gray-2 bold-700"><span className="text-dark-gray-2 font-16 bold-normal">R$</span>219<span className="text-dark-gray-2 font-16 bold-600">,00</span></h2>
                        <h3 className="text-light-gray-2 bold-normal cort font-16px">216,00</h3>
                    </hgroup>
                    <p style={{margin: "10px 0px"}} className="bold-700 font-14 text-light-gray">Descrição do produto</p>
                    <p className="font-14 bold-500 text-dark-gray-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem assumenda alias doloremque delectus, suscipit quis eaque, necessitatibus iusto eum sapiente, impedit ut dolor veniam? Laudantium iure nihil eaque provident necessitatibus.</p>
                </div>
            </section>
        </GalleryContainer>
    );
}

export default ProductViewPage;