import React from "react";
import { Bubble } from "../../styles/bubble";
import { CardContainer, MainContainer } from "./style";

const Awesometext = ({ fonts }) => {
  return (
    <MainContainer>
      {fonts.map((font, index) => {
        return (
          <CardContainer key={index}>
            {font.text}
            {index % 9 == 0 && <Bubble color={'var(--yellow)'}/>}
          </CardContainer>
        );
      })}
    </MainContainer>
  );
};

export default Awesometext;
