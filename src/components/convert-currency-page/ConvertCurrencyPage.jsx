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
  const [firstCurrency, setFirstCurrency] = useState({
    currency: "UAH",
    value: 0,
  });
  const [secondCurrency, setSecondCurrency] = useState({
    currency: "USD",
    value: 0,
  });

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

  const setCurrencies = (
    firstValue,
    secondValue,
    firstCurrencyName,
    secondCurrencyName
  ) => {
    firstValue =
      typeof firstValue !== "undefined" ? firstValue : firstCurrency.value;
    secondValue =
      typeof secondValue !== "undefined" ? secondValue : secondCurrency.value;
    firstCurrencyName =
      typeof firstCurrencyName !== "undefined"
        ? firstCurrencyName
        : firstCurrency.currency;
    secondCurrencyName =
      typeof secondCurrencyName !== "undefined"
        ? secondCurrencyName
        : secondCurrency.currency;
    setFirstCurrency({ currency: firstCurrencyName, value: firstValue });
    setSecondCurrency({ currency: secondCurrencyName, value: secondValue });
  };

  const handleFirstValueChange = (e) => {
    let curExchangeRate =
      exchangeRate[firstCurrency.currency] /
      exchangeRate[secondCurrency.currency];
    let firstValue = e.target.value;
    let secondValue = (firstValue * curExchangeRate).toFixed(2);
    setCurrencies(firstValue, secondValue);
  };

  const handleSecondValueChange = (e) => {
    let curExchangeRate =
      exchangeRate[secondCurrency.currency] /
      exchangeRate[firstCurrency.currency];
    let secondValue = e.target.value;
    let firstValue = (secondValue * curExchangeRate).toFixed(2);
    setCurrencies(firstValue, secondValue);
  };

  const handleFirstCurrencyChange = (e) => {
    let curExchangeRate =
      exchangeRate[e.target.value] / exchangeRate[secondCurrency.currency];
    let secondValue = (firstCurrency.value * curExchangeRate).toFixed(2);
    setCurrencies(...[, secondValue, e.target.value]);
  };

  const handleSecondCurrencyChange = (e) => {
    let curExchangeRate =
      exchangeRate[e.target.value] / exchangeRate[firstCurrency.currency];
    let firstValue = (secondCurrency.value * curExchangeRate).toFixed(2);
    setCurrencies(...[firstValue, , , e.target.value]);
  };

  return (
    <>
      <CatImage src={cat} />
      <Header eur={exchangeRate.EUR} usd={exchangeRate.USD} />
      <Title>Currency Converter</Title>
      <ContentWrapper>
        <CurrencyInput
          value={firstCurrency.value}
          onChangeValue={handleFirstValueChange}
          currency={firstCurrency.currency}
          onChangeCurrency={handleFirstCurrencyChange}
          exchangeRate={exchangeRate}
        />
        <ArrowsImage src={arrows} />
        <CurrencyInput
          value={secondCurrency.value}
          onChangeValue={handleSecondValueChange}
          currency={secondCurrency.currency}
          onChangeCurrency={handleSecondCurrencyChange}
          exchangeRate={exchangeRate}
        />
      </ContentWrapper>
    </>
  );
};
