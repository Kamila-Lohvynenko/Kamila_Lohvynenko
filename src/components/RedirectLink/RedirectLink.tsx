import { Link } from "react-router-dom";
import styles from "./RedirectLink.module.scss";

interface RedirectLinkProps {
  children: string;
  to: string;
}

const RedirectLink = ({ children, to }: RedirectLinkProps) => {
  return (
    <Link className={styles.link} to={to}>
      {children}
    </Link>
  );
};

export default RedirectLink;
