import styled from "@emotion/styled";

export const CurrencyInputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 45%;
  height: 200px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const CurrencyInputField = styled.input`
  box-sizing: border-box;
  text-align: center;
  height: 100px;
  width: 55%;
  font-size: 50px;
  border-radius: 15px;
  border: 10px solid #8dcde0;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
export const CurrencySelect = styled.select`
  text-align: center;
  height: 100px;
  width: 25%;
  font-size: 50px;
  border-radius: 15px;
  border: 10px solid #8dcde0;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const CurrencyOption = styled.option`
  font-size: 14px;
`;
