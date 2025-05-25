import styled from "styled-components";
import product0 from "../assets/images/product0.png";
import Carousel from "../components/Carousel"

const MainContainer = styled.main `
    width: 100%;
    box-sizing: border-box;

    & article {
        height: 681px;
        padding: 100px;

        & a {
            font-weight: 500px;
        }
    }

    // classes

    div.slide-home {
        height: 400px;
    }

    div.new {
        width: 39%;
        gap: 34px;

        & a {

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
    }

    div.product {
        overflow: hidden;

        & img {
            width: 733px;
            height: 733px;
            rotate: -19.34deg;
        }
    }

`;

const HomePage = () => {

    let slides = [

    {
        title: "Queima de <br/> stoque Nike🔥",
        desc: "Consequat culpa exercitation mollit nisi excepteur do <br/> do tempor laboris eiusmod irure consectetur.",
        content: "Melhores Ofertas Personalizadas",
        img: product0 
    },

    {
        title: "Outlet <br/> Puma⚡",
        desc: "Modelos selecionados <br/> por preços especiais",
        content: "Até 70% OFF",
        img: product0
    },
    {
        title: "Promo <br/> Especial Under",
        desc: "Tênis de corrida <br/> Frete grátis para todo Brasil",
        content: "Edição Limitada",
        img: product0
    },
    {
        title: "Black Friday <br/> Early Access",
        desc: "Acesso antecipado <br/> para clientes VIP",
        content: "Começa amanhã",
        img: product0
    }
];

    return (
        <MainContainer>
            <section>
                <article className="bg-light-gray-3 w-full ">
                    <div className="slide-home d-flex justi-cont-center align-i-center">
                        <div className="new d-flex flex-col">
                            <a className="text-warning bold-700 font-16" href="">Melhores Ofertas Personalizadas</a>
                            <h1 className="font-64">Queima de <br/> stoque Nike🔥</h1>
                            <h2 className="font-18 text-dark-gray-2 bold-normal">
                                Consequat culpa exercitation mollit nisi excepteur do <br/> do tempor laboris eiusmod irure consectetur.
                            </h2>
                            <button className="button-general bg-primary-btn transiton02s">Ver Ofertas</button>
                        </div>
                        <div className="product">
                            <img src={product0} alt="" />
                        </div>
                    </div>
                    <div className="scroll-balls" style={{ backgroundColor: 'blue' }}>
                        a
                    </div>
                </article>
            </section>
            
            <section>
                oi
            </section>
        </MainContainer>
    );
}
 
export default HomePage;