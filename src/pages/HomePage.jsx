import styled from "styled-components";

import Gallery from "../components/Gallery";
import Section from "../components/Section";

import { useState } from "react";

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */ }

const MainContainer = styled.main `
  width: 100%;
  box-sizing: border-box;

  & article {
    height: 681px;
    padding: 100px;

    & a {
      font-weight: 500; /* corrigido: tirou o 'px' */
    }
  }

  & .collections {
    padding: 50px 100px;

    & h3 {
      margin-bottom: 25px;
    }

    & .collection-cards div {
      width: 100%; /* Se estiver incomodando o layout, pode ajustar */
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
 `;


const SectionTwo = styled.section`
  padding: 40px 100px;
 `;

{/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */ }

const HomePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [fade, setFade] = useState(true);

    return (
        <MainContainer>
                <Gallery
                    images={[
                        { src: "home-slide-1.jpeg" },
                        { src: "home-slide-2.jpeg" },
                        { src: "home-slide-3.jpeg" },
                        { src: "home-slide-4.jpeg" },
                        { src: "home-slide-5.jpeg" },
                        { src: "home-slide-6.jpeg" },
                        { src: "home-slide-7.jpeg" },
                        { src: "home-slide-8.jpeg" }
                    ]}
                    width="100%"
                    height="681px"
                />

            {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}


            <Section title="Coleções em destaque" titleAlign="center">
                <div className="collection-cards d-flex justi-cont-sp-around gap1em">
                    <div>
                        <img className="round10" src="collection-1.png" alt="Coleção 1" />
                    </div>
                    <div>
                        <img className="round10" src="collection-2.png" alt="Coleção 2" />
                    </div>
                    <div>
                        <img className="round10" src="collection-3.png" alt="Coleção 3" />
                    </div>
                </div>
            </Section>


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