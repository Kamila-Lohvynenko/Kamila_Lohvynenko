import styles from "./PortfolioList.module.scss";

import aquaTrack from "../../images/aqua_track.jpg";
import travelTracks from "../../images/travel_tracks.jpg";
import battleField from "../../images/battlefield.jpg";
import nannyServices from "../../images/nanny_services.jpg";
import phoneBook from "../../images/phoneBook.jpg";
import tattooWebsite from "../../images/tattoo_website.jpg";
import sprite from "../../images/sprite.svg";

import SkillsList from "../SkillsList/SkillsList";
import { LINKS, SKILLS } from "../../constants";
import { useTranslation } from "react-i18next";

const PortfolioList = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={aquaTrack}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Aqua.Track</h2>
            <SkillsList portfolio={true} list={SKILLS.AQUA_TRACK} />
            <p className={styles.description}>{t("portfolio.aquaTrack")}</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.check")}</p>
          <a
            className={styles.link}
            href={LINKS.AQUA_TRACK.LIVE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>Live page</p>
          </a>
          <a
            className={styles.link}
            href={LINKS.AQUA_TRACK.GITHUB}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`} />
            </svg>
            <p>GitHub repository</p>
          </a>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={tattooWebsite}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Logvinenko.Tattoo</h2>
            <SkillsList portfolio={true} list={SKILLS.TATTOO_WEBSITE} />
            <p className={styles.description}>{t("portfolio.tattooWebsite")}</p>
            <ul className={styles.unorderedList}>
              {(
                t("portfolio.tattooWebsiteTasks", {
                  returnObjects: true,
                }) as string[]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.visit")}</p>
          <a
            className={styles.link}
            href={LINKS.TATTOO_WEBSITE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>logvinenko-tattoo.com</p>
          </a>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={nannyServices}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Nanny.Services</h2>
            <SkillsList portfolio={true} list={SKILLS.NANNY_SERVICES} />
            <p className={styles.description}>{t("portfolio.nannyServices")}</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.check")}</p>
          <a
            className={styles.link}
            href={LINKS.NANNY_SERVICES.LIVE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>Live page</p>
          </a>
          <a
            className={styles.link}
            href={LINKS.NANNY_SERVICES.GITHUB}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`} />
            </svg>
            <p>GitHub repository</p>
          </a>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={travelTracks}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Travel.Tracks</h2>
            <SkillsList portfolio={true} list={SKILLS.TRAVEL_TRACKS} />
            <p className={styles.description}>{t("portfolio.travelTracks")}</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.check")}</p>
          <a
            className={styles.link}
            href={LINKS.TRAVEL_TRACK.LIVE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>Live page</p>
          </a>
          <a
            className={styles.link}
            href={LINKS.TRAVEL_TRACK.GITHUB}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`} />
            </svg>
            <p>GitHub repository</p>
          </a>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={battleField}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Battle.Field</h2>
            <SkillsList portfolio={true} list={SKILLS.BATTLE_FIELD} />
            <p className={styles.description}>{t("portfolio.battleField")}</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.check")}</p>
          <a
            className={styles.link}
            href={LINKS.BATTLE_FIELD.LIVE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>Live page</p>
          </a>
          <a
            className={styles.link}
            href={LINKS.BATTLE_FIELD.GITHUB}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`} />
            </svg>
            <p>GitHub repository</p>
          </a>
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.itemWrapper}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="project home page photo"
              src={phoneBook}
            />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Phone.Book</h2>
            <SkillsList portfolio={true} list={SKILLS.CONTACTS_BOOK} />
            <p className={styles.description}>{t("portfolio.contactsBook")}</p>
          </div>
        </div>
        <div className={styles.linksWrapper}>
          <p className={styles.checkText}>{t("portfolio.check")}</p>
          <a
            className={styles.link}
            href={LINKS.PHONE_BOOK.LIVE}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-link`} />
            </svg>
            <p>Live page</p>
          </a>
          <a
            className={styles.link}
            href={LINKS.PHONE_BOOK.GITHUB}
            target="blanket"
          >
            <svg className={styles.icon}>
              <use href={`${sprite}#icon-github`} />
            </svg>
            <p>GitHub repository</p>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default PortfolioList;
