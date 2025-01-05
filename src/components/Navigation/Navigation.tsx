import styles from "./Navigation.module.scss";

import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  closeMenu?: () => void;
}

const Navigation = ({ closeMenu }: NavigationProps) => {
  const { t } = useTranslation();

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <nav className={styles.nav}>
      <NavLink className={linkClassName} to="/" onClick={closeMenu}>
        {t("navigation.home")}
      </NavLink>
      <NavLink to="/portfolio" className={linkClassName} onClick={closeMenu}>
        {t("navigation.portfolio")}
      </NavLink>
      <NavLink to="/contacts" className={linkClassName} onClick={closeMenu}>
        {t("navigation.contacts")}
      </NavLink>
    </nav>
  );
};

export default Navigation;
