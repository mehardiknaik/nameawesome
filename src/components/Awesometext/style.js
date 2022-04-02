import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  margin-top:1rem;
  gap: 0.7rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.26);
  border: 7px solid var(--blueCard);
  box-shadow: var(--boxShadow);
  border-radius: 10px;
  padding: 0.4rem;
  position: relative;
  transform:skewX(10deg);
`;
