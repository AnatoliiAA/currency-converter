const BASE_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";
export const getExchangeRate = async () => {
  try {
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
