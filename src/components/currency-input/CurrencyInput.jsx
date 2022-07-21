import {
  CurrencyInputWrapper,
  CurrencyInputField,
  CurrencySelect,
  CurrencyOption,
} from "./CurrencyInput.css";

export const CurrencyInput = ({
  value,
  onChangeValue,
  currency,
  onChangeCurrency,
  exchangeRate,
}) => (
  <CurrencyInputWrapper>
    <CurrencyInputField type="number" value={value} onChange={onChangeValue} />
    <CurrencySelect value={currency} onChange={onChangeCurrency}>
      {Object.keys(exchangeRate).map((currency) => {
        return (
          <CurrencyOption key={currency} value={currency}>
            {currency}
          </CurrencyOption>
        );
      })}
    </CurrencySelect>
  </CurrencyInputWrapper>
);
