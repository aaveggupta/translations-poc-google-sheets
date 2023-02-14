import React from "react";
import { useTranslation } from "react-i18next";

export const LangSwitcher = function LangSwitcher() {
  const { i18n } = useTranslation();

  const onClickBtn = (e) => {
    var selectLang = e.currentTarget.getAttribute("data-key") || "en";
    i18n.changeLanguage(selectLang);
  };
  return (
    <div>
      <button onClick={onClickBtn} data-key="en">
        English
      </button>
      <button onClick={onClickBtn} data-key="hi">
        Hindi
      </button>
      <button onClick={onClickBtn} data-key="id">
        Indonesia
      </button>
    </div>
  );
};
