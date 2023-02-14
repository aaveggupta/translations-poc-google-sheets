import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../locale/en.json";
import Hindi from "../locale/hi.json";
import Indonesian from "../locale/id.json";

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === "en") {
  lang = English;
} else {
  if (local === "hi") {
    lang = Hindi;
  } else {
    lang = Indonesian;
  }
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "hi") {
        setMessages(Hindi);
      } else {
        setMessages(Indonesian);
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
