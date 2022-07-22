import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { getExchangeRate } from "../../api/api";
import arrows from "../../static/arrows.png";
import cat from "../../static/cat.png";
import {
  ContentWrapper,
  Title,
  ArrowsImage,
  CatImage,
} from "./ConvertCurrencyPage.css";
import { CurrencyInput } from "../currency-input/CurrencyInput";

export const ConvertCurrencyPage = () => {
  const [exchangeRate, setExchangeRate] = useState({ UAH: 1 });
  const [firstCurrency, setFirstCurrency] = useState("UAH");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondtValue] = useState(0);

  useEffect(() => {
    let fetchData = async () => {
      let result = await getExchangeRate();
      let tempExchangeRate = {};
      result.forEach((currency) => {
        tempExchangeRate[currency.cc] = currency.rate;
      });
      setExchangeRate({ ...exchangeRate, ...tempExchangeRate });
    };
    fetchData();
  }, []);

  const handleFirstValueChange = (e) => {
    let curExchangeRate =
      exchangeRate[firstCurrency] / exchangeRate[secondCurrency];
    let newFirstValue = e.target.value;
    let newSecondValue = (newFirstValue * curExchangeRate).toFixed(2);
    setFirstValue(newFirstValue);
    setSecondtValue(newSecondValue);
  };

  const handleSecondValueChange = (e) => {
    let curExchangeRate =
      exchangeRate[secondCurrency] / exchangeRate[firstCurrency];
    let newSecondValue = e.target.value;
    let newFirstValue = (newSecondValue * curExchangeRate).toFixed(2);
    setFirstValue(newFirstValue);
    setSecondtValue(newSecondValue);
  };

  const handleFirstCurrencyChange = (e) => {
    let curExchangeRate =
      exchangeRate[e.target.value] / exchangeRate[secondCurrency];
    let newSecondValue = (firstValue * curExchangeRate).toFixed(2);
    setSecondtValue(newSecondValue);
    setFirstCurrency(e.target.value);
  };

  const handleSecondCurrencyChange = (e) => {
    let curExchangeRate =
      exchangeRate[e.target.value] / exchangeRate[firstCurrency];
    let newFirstValue = (secondValue * curExchangeRate).toFixed(2);
    setFirstValue(newFirstValue);
    setSecondCurrency(e.target.value);
  };

  return (
    <>
      <CatImage src={cat} />
      <Header eur={exchangeRate.EUR} usd={exchangeRate.USD} />
      <Title>Currency Converter</Title>
      <ContentWrapper>
        <CurrencyInput
          value={firstValue}
          onChangeValue={handleFirstValueChange}
          currency={firstCurrency}
          onChangeCurrency={handleFirstCurrencyChange}
          exchangeRate={exchangeRate}
        />
        <ArrowsImage src={arrows} />
        <CurrencyInput
          value={secondValue}
          onChangeValue={handleSecondValueChange}
          currency={secondCurrency}
          onChangeCurrency={handleSecondCurrencyChange}
          exchangeRate={exchangeRate}
        />
      </ContentWrapper>
    </>
  );
};
