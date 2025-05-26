import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GalleryWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .dots {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 2;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: background 0.3s;
  }

  .dot:hover {
    background: #c92071;
  }

  .dot.active {
    background: #c92071;
  }
`;

const Gallery = ({ images, width = "100%", height = "400px" }) => {
  const [index, setIndex] = useState(0);

  // troca automática de slide a cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <GalleryWrapper width={width} height={height}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={`Slide ${i}`}
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
