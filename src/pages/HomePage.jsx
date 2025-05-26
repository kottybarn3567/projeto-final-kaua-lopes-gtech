import styled from "styled-components";
import product0 from "../assets/images/product0.png";
import collection1 from "../assets/images/collection1.png";
import collection2 from "../assets/images/collection2.png";
import collection3 from "../assets/images/collection3.png";
import { useState } from "react";

const slidesText = [
    {
        title: "Queima de estoque Nike🔥",
        subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
        tag: "Melhores Ofertas Personalizadas",
        button: "Ver Ofertas",
        // sideImg: "..."
    },
    {
        title: "Sapatos Sociais com até 50% OFF 👞",
        subtitle: "Modelos clássicos e modernos com acabamento premium. Ideal para eventos, trabalho e ocasiões especiais.",
        tag: "Estilo Sofisticado",
        button: "Ver Coleção",
        // sideImg: "..."
    },
    {
        title: "Tênis Casuais a partir de R$99 👟",
        subtitle: "Estilo urbano e conforto total para qualquer rotina. Várias cores e modelos incríveis pra você!",
        tag: "Conforto no Dia a Dia",
        button: "Explorar Tênis",
        // sideImg: "..."
    },
    {
        title: "Sapatos Femininos com até 60% OFF 👠",
        subtitle: "Estilo, conforto e personalidade em cada passo. Dos saltos aos tênis, tudo em promoção!",
        tag: "Especial Para Elas",
        button: "Ver Ofertas",
        // sideImg: "..."
    },
];

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}


const MainContainer = styled.main`
    width: 100%;
    box-sizing: border-box;

    & article {
        height: 681px;
        padding: 100px;

        & a {
            font-weight: 500px;
        }
    }

    & .collections {
        padding: 50px 100px;

        & h3 {
            margin-bottom: 25px;
        }

        & .collection-cards div {
            width: 100%;
        }

        & .collec-items {
            background-color: #D8E3F2;
            padding: 30px;
            height: 310px;
            position: relative;
            z-index: 0;

            & span {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
            }

            & button:hover {
                background-color: #B5B6F2;

                & p {
                    color: white;
                }
            }

            & img {
                z-index: -1;
                right: 0px;
                bottom: 0px;
            }
        }
    }

    // classes

    div.slide-home {
        height: 400px;
    }

    div.new {
        width: 40%;
        gap: 34px;
        transition: opacity 0.4s ease-in-out;
        opacity: 1;

        &.fade-out {
            opacity: 0;
        }

        & h1 {
            line-height: 65px;
        }

        & h2 {
            line-height: 32px;
        }

        & button {
            width: 40%;
        }
    }

    div.scroll-balls {
        margin-top: 120px;
        width: 78px;
        margin: 100px auto;
        position: relative;
        z-index: 1;

        & .balls {
            width: 12px;
            height: 12px;
        }

        & .balls:hover {
            width: 12px;
            height: 12px;
            background-color: #c92071;
        }
    }

    div.product {

        & img {
            z-index: 0;
            position: relative;
            width: 733px;
            height: 733px;
            rotate: -19.34deg;
        }
    }

`;

const SectionTwo = styled.section `
    padding: 40px 100px;
`;

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

const HomePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [fade, setFade] = useState(true);

    return (
            <MainContainer>
                <section>
                    <article className="bg-light-gray-3 w-full">
                        <div className="slide-home d-flex justi-cont-center align-i-center">
                            <div className={`new d-flex flex-col ${fade ? "" : "fade-out"}`}>
                                <a className="text-warning bold-700 font-16" href="">
                                    {slidesText[activeSlide].tag}
                                </a>
                                <h1 className="font-64">{slidesText[activeSlide].title}</h1>
                                <h2 className="font-18 text-dark-gray-2 bold-normal">
                                    {slidesText[activeSlide].subtitle}
                                </h2>
                                <button className="button-general bg-primary-btn transiton02s">
                                    {slidesText[activeSlide].button}
                                </button>
                            </div>
                            <div className="product">
                                <img src={product0} alt="" />
                            </div>
                        </div>
                        <div className="scroll-balls d-flex justi-cont-sp-between">
                            {[0, 1, 2, 3].map((index) => (
                                <span
                                    key={index}
                                    onClick={() => {
                                        if (activeSlide !== index) {
                                            setFade(false);
                                            setTimeout(() => {
                                            setActiveSlide(index);
                                            setFade(true);
                                            }, 200); // tempo do fade-out
                                        }
                                    }}
                                    className={`balls round-full d-block transiton01s pointer ${activeSlide === index ? "bg-primary-btn" : "bg-light-gray-2"}`}
                                ></span>
                            ))}
                        </div>
                    </article>
                </section>

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}

                <section className="collections">
                    <h3 className="font-23 text-dark-gray-2">Coleções em destaque</h3>
                    <div className="collection-cards d-flex justi-cont-sp-around gap1em">
                        <div className="collec-items d-flex justi-cont-sp-between flex-col gap1em round10">
                            <span className="bg-light-green bold-700 w-third round-inf text-dark-gray-2">30% OFF</span>
                            <button className="buy-button transiton01s button-general bg-light-gray-3 w-half"><p className="bold-700 text-primary transiton01s">Comprar</p></button>
                            <img className="absolute round10" src={collection1} alt="" />
                        </div>
                        <div className="collec-items d-flex justi-cont-sp-between flex-col gap1em round10">
                            <span className="bg-light-green bold-700 w-third round-inf text-dark-gray-2">30% OFF</span>
                            <button className="buy-button transiton01s button-general bg-light-gray-3 w-half"><p className="bold-700 text-primary transiton01s">Comprar</p></button>
                            <img className="absolute round10" src={collection2} alt="" />
                        </div>
                        <div className="collec-items d-flex justi-cont-sp-between flex-col gap1em round10">
                            <span className="bg-light-green bold-700 w-third round-inf text-dark-gray-2">30% OFF</span>
                            <button className="buy-button transiton01s button-general bg-light-gray-3 w-half"><p className="bold-700 text-primary transiton01s">Comprar</p></button>
                            <img className="absolute round10" src={collection3} alt="" />
                        </div>
                    </div>
                </section>

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
    
                <SectionTwo>
                    <h3 className="font-23 text-dark-gray-2 w-full text-center">Coleções em destaque</h3>
                    <div>
                        <figure>
                            <img src="" alt="" />
                            <p></p>
                        </figure>
                        <figure>
                            <img src="" alt="" />
                            <p></p>
                        </figure>
                        <figure>
                            <img src="" alt="" />
                            <p></p>
                        </figure>
                        <figure>
                            <img src="" alt="" />
                            <p></p>
                        </figure>
                        <figure>
                            <img src="" alt="" />
                            <p></p>
                        </figure>
                    </div>
                </SectionTwo>
            </MainContainer>
    );
};

export default HomePage;