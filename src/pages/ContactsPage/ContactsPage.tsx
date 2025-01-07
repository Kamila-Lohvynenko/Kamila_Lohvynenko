import ChangeLanguageBtn from "../../components/ChangeLanguageBtn/ChangeLanguageBtn";
import styles from "./ContactsPage.module.scss";
import sprite from "../../images/sprite.svg";

import { useTranslation } from "react-i18next";
import { CONTACTS } from "../../constants";
import { useState } from "react";

const ContactsPage = () => {
  const { t } = useTranslation();

  const [isTelegramShown, setIsTelegramShown] = useState<boolean>(false);
  const [isWhatsappShown, setIsWhatsappShown] = useState<boolean>(false);

  return (
    <div className={styles.page}>
      <ChangeLanguageBtn />
      <h1 className={styles.title}>
        {t("contactsPage.title.part1")}
        <span className={styles.accent}>{t("contactsPage.title.accent")}</span>
        {t("contactsPage.title.part2")}
      </h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href={CONTACTS.LINKEDIN} target="blank">
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-linkedin`} />
            </svg>
            LinkedIn
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href={CONTACTS.GITHUB} target="blank">
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github2`} />
            </svg>
            GitHub
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href={`mailto:${CONTACTS.EMAIL}`}
            target="blank"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-mail`} />
            </svg>
            {CONTACTS.EMAIL}
          </a>
        </li>
        <li className={styles.item}>
          <div className={styles.linkButtonWrapper}>
            <a className={styles.link} href={CONTACTS.TELEGRAM} target="blank">
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-telegram`} />
              </svg>
              Telegram
            </a>
            <button
              onClick={() => setIsTelegramShown(!isTelegramShown)}
              className={styles.buttonArrow}
              type="button"
            >
              <svg className={styles.iconButton}>
                <use
                  href={`${sprite}#icon-${
                    isTelegramShown ? "arrow-up" : "arrow-down"
                  }`}
                />
              </svg>
            </button>
          </div>
          {isTelegramShown && (
            <p className={styles.number}>{CONTACTS.UKR_PHONE}</p>
          )}
        </li>
        <li className={styles.item}>
          <a
            className={styles.link}
            href={`tel:${CONTACTS.PHONE}`}
            target="blank"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-phone`} />
            </svg>
            <p>{CONTACTS.PHONE}</p>
          </a>
        </li>
        <li className={styles.item}>
          <div className={styles.linkButtonWrapper}>
            <a
              className={styles.link}
              href={`tel:${CONTACTS.WHATSAPP}`}
              target="blank"
            >
              <svg className={styles.icon}>
                <use href={`${sprite}#icon-whatsapp`} />
              </svg>
              <p>WhatsApp</p>
            </a>
            <button
              onClick={() => setIsWhatsappShown(!isWhatsappShown)}
              className={styles.buttonArrow}
              type="button"
            >
              <svg className={styles.iconButton}>
                <use
                  href={`${sprite}#icon-${
                    isWhatsappShown ? "arrow-up" : "arrow-down"
                  }`}
                />
              </svg>
            </button>
          </div>
          {isWhatsappShown && (
            <p className={styles.number}>{CONTACTS.UKR_PHONE}</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ContactsPage;
