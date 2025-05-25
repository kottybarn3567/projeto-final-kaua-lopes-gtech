import styled from "styled-components";
import product0 from "../assets/images/product0.png";
import { useState } from "react";

const slidesText = [
    {
        title: "Queima de estoque Nike🔥",
        subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
        tag: "Melhores Ofertas Personalizadas",
        button: "Ver Ofertas"
    },
    {
        title: "Sapatos Sociais com até 50% OFF 👞",
        subtitle: "Modelos clássicos e modernos com acabamento premium. Ideal para eventos, trabalho e ocasiões especiais.",
        tag: "Estilo Sofisticado",
        button: "Ver Coleção"
    },
    {
        title: "Tênis Casuais a partir de R$99 👟",
        subtitle: "Estilo urbano e conforto total para qualquer rotina. Várias cores e modelos incríveis pra você!",
        tag: "Conforto no Dia a Dia",
        button: "Explorar Tênis"
    },
    {
        title: "Sapatos Femininos com até 60% OFF 👠",
        subtitle: "Estilo, conforto e personalidade em cada passo. Dos saltos aos tênis, tudo em promoção!",
        tag: "Especial Para Elas",
        button: "Ver Ofertas"
    },
];


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

        & .collec-items {
            height: 40px;
        }
    }

    // classes

    div.slide-home {
        height: 400px;
    }

    div.new {
        width: 39%;
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
        overflow: hidden;

        & img {
            z-index: 0;
            position: relative;
            width: 733px;
            height: 733px;
            rotate: -19.34deg;
        }
    }

`;


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
                                className={`balls round-full d-block transiton01s pointer ${activeSlide === index ? "bg-primary-btn" : "bg-light-gray-2"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </article>
            </section>

            <section className="collections">
                <h3 className="font-23 text-dark-gray-2">Coleções em destaque</h3>
                <div className="d-flex justi-cont-sp-between gap1em">
                    <div className="bg-primary w-third collec-items gap1em round10"></div>
                    <div className="bg-primary w-third collec-items gap1em round10"></div>
                    <div className="bg-primary w-third collec-items gap1em round10"></div>
                </div>
            </section>
        </MainContainer>
    );
};

export default HomePage;