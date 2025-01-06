import styles from "./PortfolioList.module.scss";

import aquaTrack from "../../images/aqua_track.jpg";
import travelTracks from "../../images/travel_tracks.jpg";
import battleField from "../../images/battlefield.jpg";
import nannyServices from "../../images/nanny_services.jpg";
import phoneBook from "../../images/phoneBook.jpg";

import SkillsList from "../SkillsList/SkillsList";
import { SKILLS } from "../../constants";
import { useTranslation } from "react-i18next";

const PortfolioList = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
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
      </li>
      <li className={styles.item}>
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
      </li>

      <li className={styles.item}>
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
      </li>
      <li className={styles.item}>
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
      </li>
      <li className={styles.item}>
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
      </li>
    </ul>
  );
};

export default PortfolioList;
