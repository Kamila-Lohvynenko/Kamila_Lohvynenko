import styles from "./Header.module.scss";

import Logo from "../Logo/Logo";
import BurgerButton from "../MobileMenu/BurgerButton/BurgerButton";
import Navigation from "../Navigation/Navigation";
import RedirectLink from "../RedirectLink/RedirectLink";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.navWrapper}>
        <Navigation />
      </div>
      <BurgerButton />
      <div className={styles.linkWrapper}>
        <RedirectLink to="/contacts">{t("actions.writeMe")}</RedirectLink>
      </div>
    </header>
  );
};

export default Header;
