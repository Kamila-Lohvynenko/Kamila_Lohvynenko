import ChangeLanguageBtn from "../../components/ChangeLanguageBtn/ChangeLanguageBtn";
import styles from "./HomePage.module.scss";
import myPhoto from "../../images/my_photo.jpeg";

import { useTranslation } from "react-i18next";
import SkillsList from "../../components/SkillsList/SkillsList";
import { SKILLS } from "../../constants";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <ChangeLanguageBtn />
      <div className={styles.pageWrapper}>
        <div className={styles.content}>
          <h2 className={styles.subtitle}> {t("heroSection.subtitle")}</h2>
          <h1 className={styles.title}>
            <span className={styles.accent}>
              {t("heroSection.titlePart1")}{" "}
            </span>
            {t("heroSection.titlePart2")}
          </h1>
          <p>{t("heroSection.text")}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={myPhoto} alt="my photo" />
        </div>
      </div>
      <h3 className={styles.listTitle}>{t("heroSection.techSkills")}</h3>
      <SkillsList list={SKILLS.ALL} />
    </div>
  );
};

export default HomePage;
