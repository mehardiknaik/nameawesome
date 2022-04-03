import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  gap: 0.7rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  z-index: 1;
  transition: all 0.4s;
  & > div {
    background: rgba(255, 255, 255, 0.26);
    border: 7px solid var(--yellow);
    box-shadow: var(--boxShadow);
    border-radius: 10px;
    padding: 0.4rem;
    position: relative;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    z-index: 10;
    & > div {
      transform: scale(1.1);
      background: white;
    }
  }
`;
