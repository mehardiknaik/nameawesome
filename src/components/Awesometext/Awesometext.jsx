import React from "react";
import { Bubble } from "../../styles/bubble";
import { Card, MainContainer } from "./style";

const Awesometext = ({ fonts }) => {
  return (
    <MainContainer>
      {fonts.map((font, index) => {
        return (
          <Card data-aos="zoom-in" key={index}>
            <div>
                <div>{font.text}</div> 
                {/* <div>button</div>  */}
              {index % 9 == 0 && (
                <Bubble
                  color={`hsl(${Math.floor(Math.random() * 360)} 98% 83%);`}
                />
              )}
            </div>
          </Card>
        );
      })}
    </MainContainer>
  );
};

export default Awesometext;
