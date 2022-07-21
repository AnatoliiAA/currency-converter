import { Wrapper, HeaderText } from "./Header.css";
export const Header = ({ eur, usd }) => (
  <Wrapper>
    <HeaderText>€: {eur}</HeaderText>
    <HeaderText>$: {usd}</HeaderText>
  </Wrapper>
);
