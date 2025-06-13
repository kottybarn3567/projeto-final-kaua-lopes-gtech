import { useState } from "react";
import styled from "styled-components";
import product1 from "../assets/images/produc-image-1.jpeg";
import product2 from "../assets/images/produc-image-2.jpeg";
import product3 from "../assets/images/produc-image-3.jpeg";
import product4 from "../assets/images/produc-image-4.jpeg";
import product5 from "../assets/images/produc-image-5.jpeg";

const GalleryContainer = styled.section`
  & .images {
    padding: 30px 100px;
    background-color: #c97100;
    height: 500px;
    width: 738px;
    border-radius: 10px;
    position: relative;

    & .arrows {
      z-index: 1;
      padding: 0px 40px;
    }

    & .pic img {
      border-radius: 10px ;
      width: 500px;
      opacity: 0;
      animation: fade 0.4s ease-in-out forwards;
    }

    & .arrows svg {
      cursor: pointer;
    }

    @keyframes fade {
      to {
        opacity: 1;
      }
    }
  }
`;

const GalleryTwo = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const images = [
    { src: product1 },
    { src: product2 },
    { src: product3 },
    { src: product4 },
    { src: product5 },
  ];

  const goPrev = () => {
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <GalleryContainer>
      <section className="images d-flex align-i-center justi-cont-center">
        <div className="arrows d-flex w-full justi-cont-sp-between align-i-center h-full absolute">
          <svg onClick={goPrev} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM148.24,92.24,112.49,128l35.75,35.76a6,6,0,1,1-8.48,8.48l-40-40a6,6,0,0,1,0-8.48l40-40a6,6,0,0,1,8.48,8.48Z" />
          </svg>

          <svg onClick={goNext} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm28.24-94.24a6,6,0,0,1,0,8.48l-40,40a6,6,0,0,1-8.48-8.48L143.51,128,107.76,92.24a6,6,0,0,1,8.48-8.48Z" />
          </svg>
        </div>

        <div className="pic">
          <img
            key={imgIndex}
            src={images[imgIndex].src}
          />
        </div>
      </section>
    </GalleryContainer>
  );
};

export default GalleryTwo;
