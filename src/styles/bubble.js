import styled from "styled-components";

export const Bubble = styled.div`
  position: absolute;
  width: 40%;
  height: 14rem;
  border-radius: 50%;
  background: ${({ color }) => color || "#edd0ff"};
  filter: blur(212px);
  z-index: -9;
  top: -18%;
  left: 56%;
  filter: blur(72px);
`;
