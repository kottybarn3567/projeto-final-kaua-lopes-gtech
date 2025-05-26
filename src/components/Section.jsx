import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 40px 100px;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #4a4a4a;
  text-align: ${(props) => props.align || "left"};
  margin-bottom: 24px;
`;

const Section = ({ title, titleAlign = "left", children }) => {
  return (
    <SectionWrapper>
      {title && <Title align={titleAlign}>{title}</Title>}
      {children}
    </SectionWrapper>
  );
};

export default Section;
