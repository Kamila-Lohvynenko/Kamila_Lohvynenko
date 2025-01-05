import { useTranslation } from "react-i18next";
import styles from "./ChangeLanguageBtn.module.scss";

const lngs = {
  en: { nativeName: "EN" },
  de: { nativeName: "DE" },
};

const ChangeLanguageBtn = () => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.buttons}>
      {Object.keys(lngs).map((lng) => {
        const languageKey = lng as keyof typeof lngs; // Explicitly type lng
        return (
          <button
            type="button"
            key={languageKey}
            onClick={() => i18n.changeLanguage(languageKey)}
            disabled={i18n.resolvedLanguage === languageKey}
            aria-pressed={i18n.resolvedLanguage === languageKey}
            title={`Switch to ${lngs[languageKey].nativeName}`}
            className={
              i18n.resolvedLanguage === languageKey
                ? `${styles.button} ${styles.activeLanguage}`
                : styles.button
            }
          >
            {lngs[languageKey].nativeName}
          </button>
        );
      })}
    </div>
  );
};

export default ChangeLanguageBtn;
