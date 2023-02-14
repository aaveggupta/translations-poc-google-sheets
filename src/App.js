import React, { useContext } from "react";
import "./App.css";
import { FormattedMessage } from "react-intl";
import { Context } from "./components/wrapper";

function App() {
  const context = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="id">Indonesian</option>
        </select>
        <p>
          <FormattedMessage
            id="siteMetaData.siteName"
            defaultMessage="Achieve peak cashflows 📈"
          />
          ;
        </p>
        <p>
          <FormattedMessage
            id="testVercel"
            defaultMessage="its a test of vercel build"
          />
          ;
        </p>
      </header>
    </div>
  );
}

export default App;
