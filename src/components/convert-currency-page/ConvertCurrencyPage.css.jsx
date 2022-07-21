import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1400px;
  height: calc(100vh - 260px);
  margin: auto;
  @media screen and (max-width: 1024px) {
    align-content: space-evenly;
  }
`;

export const Title = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 50px;
  margin-top: 30px;
`;

export const ArrowsImage = styled.img`
  width: 10%;
  @media screen and (max-width: 1024px) {
    transform: rotate(90deg);
    width: 100px;
  }
`;

export const CatImage = styled.img`
  position: fixed;
  width: 150px;
  right: 0;
  bottom: -110px;
  transition: transform 0.1s ease-in;
  &:hover {
    transform: translateY(-45px);
  }
`;
