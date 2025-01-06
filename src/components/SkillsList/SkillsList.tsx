import styles from "./SkillsList.module.scss";

import clsx from "clsx";

interface SkillsListProps {
  list: string[][];
  portfolio?: boolean;
}

const SkillsList = ({ list, portfolio }: SkillsListProps) => {
  const skillClassName = clsx(styles.item, portfolio && styles.portfolio);
  return (
    <ul className={styles.list}>
      {list.map((skill, i) => {
        return (
          <li className={skillClassName} key={i}>
            {skill[0]}
            {skill[1] && <span className={styles.accent}>{skill[1]}</span>}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
