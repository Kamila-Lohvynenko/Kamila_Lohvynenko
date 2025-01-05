import ChangeLanguageBtn from "../../components/ChangeLanguageBtn/ChangeLanguageBtn";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <ChangeLanguageBtn />
    </div>
  );
};

export default HomePage;
