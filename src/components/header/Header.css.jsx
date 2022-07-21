import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: lightblue;
  box-shadow: 0px 0px 20px -10px;
  border-radius: 0 0 15px 15px;
  @media screen and (max-width: 480px) {
    justify-content: space-evenly;
  }
`;

export const HeaderText = styled.span`
  display: inline-block;
  font-size: 50px;
  margin: 0 50px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 0 25px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin: 0;
  }
`;
