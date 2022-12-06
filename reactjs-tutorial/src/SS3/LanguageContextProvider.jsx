import React, { useState } from "react";
import { createContext } from "react";
import { IntlProvider } from "react-intl";
import viMessage from "./messages/vi.json";
import enMessage from "./messages/en.json";

export const LANGUAGE_CONTEXT = createContext();

const allMessages = {
  vi: viMessage,
  en: enMessage,
};

function LanguageContextProvider({ children }) {
  const [lang, setLang] = useState("vi");

  return (
    <LANGUAGE_CONTEXT.Provider value={{ lang: lang, setLang: setLang }}>
      <IntlProvider messages={allMessages[lang]} locale={lang}>
        {children}
      </IntlProvider>
    </LANGUAGE_CONTEXT.Provider>
  );
}

export default LanguageContextProvider;
