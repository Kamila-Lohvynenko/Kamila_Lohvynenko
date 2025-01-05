import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a className={styles.logo}>
      <p className={styles.letter}>K</p>
      <p className={styles.dot}>.</p>
      <p className={styles.letter}>L</p>
    </a>
  );
};

export default Logo;
