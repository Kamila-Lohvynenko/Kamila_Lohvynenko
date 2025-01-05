import ChangeLanguageBtn from "../../components/ChangeLanguageBtn/ChangeLanguageBtn";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <ChangeLanguageBtn />
      <div className={styles.content}></div>
      <div className={styles.im}></div>
    </div>
  );
};

export default HomePage;
