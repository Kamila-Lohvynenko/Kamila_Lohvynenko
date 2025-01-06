import styles from "./PortfolioPage.module.scss";

import { useTranslation } from "react-i18next";
import PortfolioList from "./../../components/PortfolioList/PortfolioList";
import ChangeLanguageBtn from "../../components/ChangeLanguageBtn/ChangeLanguageBtn";

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <ChangeLanguageBtn />
      <h1 className={styles.title}>{t("portfolio.title")}</h1>
      <PortfolioList />
    </div>
  );
};

export default PortfolioPage;
