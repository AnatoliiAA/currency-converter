import { Global } from "@emotion/react";
import { ConvertCurrencyPage } from "./components/convert-currency-page/ConvertCurrencyPage";
import { reset } from "./theme/reset";
import { global } from "./theme/global";

export const App = () => (
  <div>
    <Global styles={[global, reset]}></Global>
    <ConvertCurrencyPage />
  </div>
);
