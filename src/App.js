import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./LangSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <LangSwitcher />
        <p>{t("siteMetaData.siteName")}</p>
      </header>
    </div>
  );
}

export default App;
